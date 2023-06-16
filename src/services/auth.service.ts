import axios from "axios";

export const getAuthTokenWithKey = async( widgetKey: string, baseUrl: string ) => {
    try {
        const res = await axios.post(`${baseUrl}/api/v1/auth/widget`, { widgetKey: widgetKey });

        return res.data.token;    
    } catch (error) {
        console.log(error);
    }
    return "";
}