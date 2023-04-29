export const darkenColor = (hex: string, percent: number): string => {
    // Convert hex to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Convert RGB to HSL
    const hsl = rgbToHsl(r, g, b);

    // Decrease lightness by percent
    hsl[2] -= percent / 100;

    // Convert HSL back to RGB
    const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);

    // Convert RGB to hex
    const newHex = rgbToHex(rgb[0], rgb[1], rgb[2]);

    return newHex;
}

// Convert RGB to HSL
function rgbToHsl(r: number, g: number, b: number): number[] {
    r /= 255; 
    g /= 255; 
    b /= 255;

    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h: number = 0, s: number, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

// Convert HSL to RGB
function hslToRgb(h: number, s: number, l: number): number[] {
    let r: number, g: number, b: number;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p: number, q: number, t: number): number {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        }

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


// Convert RGB to hex
function rgbToHex(r: number, g: number, b: number): string {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}