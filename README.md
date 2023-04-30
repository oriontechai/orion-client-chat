This is ORION client chat widget.

For deploying use
```
npm run build
```

This creates an embedded js file that has to be deployed to a cdn. 

The project is using Google Cloud Storage as CDN. There is a bucket named orion-client-chat

Always change the name of the .js file in the folder (orion-chat-widget-static.js)

For uploading the js file use the next command
```
gsutil -m rsync -r ./dist/assets gs://orion-client-chat/static
```

Bucket creation steps can be found [here](https://cloud.google.com/appengine/docs/standard/serving-static-files?tab=python).

Embedding code is: 
```html
    <div id="orion-client-chat-widget"></div>
    
    <script type="text/javascript" src="https://storage.googleapis.com/orion-client-chat/static/orion-chat-widget-static.js" data-clientId="AAAABBBBCCCCDDDD"></script>
```

Vite config is needed for the creation of only one static file creation:

Install package:
```
npm install vite-plugin-css-injected-by-js
```

Then some vite configuration:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    cssInjectedByJsPlugin(),
  ],
  build: {
    cssCodeSplit: false,
  },
})
```