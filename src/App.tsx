import { useEffect, useState } from 'react'
import { getAuthTokenWithKey } from './services/auth.service';
import Chat from './Chat/Chat';

const PROD_BASE_URL = 'https://orionapi.uk.r.appspot.com';
const DEV_BASE_URL = 'http://localhost:8080';

const BASE_URL = true ? DEV_BASE_URL : PROD_BASE_URL; // CHANGE TO FALSE WHEN BUILDING FOR PRODUCTION

function App() {

  const [widgetAuthenticated, setWidgetAuthenticated] = useState<boolean>(false);
  const [jwtToken, setJwtToken] = useState<string>("");

  const getToken = async( widgetKey: string ) => {
    const token = await getAuthTokenWithKey(widgetKey, BASE_URL);
    if(token != ""){
      setWidgetAuthenticated(true);
      setJwtToken(token);
    }
  }

  useEffect( () => {
    const scriptTag = document.querySelector('script[src="https://storage.googleapis.com/orion-client-chat/static/orion-chat-widget-static.js"]');

    let widgetKey: string | undefined;

    if (scriptTag) {
      widgetKey = scriptTag.getAttribute('data-clientId') as string;
    } else {
      // FOR TESTING IN DEVELOP
      widgetKey = '0d126ba1f99f2ded'; // FOR BUILDING COMMENT THIS LINE ALWAYS!!
    }

    if(widgetKey){
      getToken( widgetKey);
    }
    
  }, []);

  return (
    <>
      { widgetAuthenticated && <Chat jwtToken={jwtToken} baseUrl={BASE_URL} />}
    </>
  )
}

export default App
