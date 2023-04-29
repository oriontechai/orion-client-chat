import axios from "axios";
import { Message } from "../models";

// prod https://dark-pink-tick-kit.cyclic.app
// dev http://localhost:8080
//const URL = "https://dark-pink-tick-kit.cyclic.app/api/v1/chat/get-completion"

//const baseURL = 'http://localhost:8080/api/v1/chat/';
const baseURL = 'https://orionapi.uk.r.appspot.com/api/v1/chat/';

const ORION_URL = baseURL + 'get-completion';
const CLIENT_URL = baseURL + 'client/get-completion';

export const getChatCompletion = async (messages: Array<Message>) => {
    try {
        const { data } = await axios.post(ORION_URL, {
            messages: messages
        });
        
        return data?.text as string;   
    } catch (error) {
        console.log(error);
    }
    return "";
}

export const getClientChatCompletion = async (messages: Array<Message>, context: string) => {
    try {
        const { data } = await axios.post(CLIENT_URL, {
            messages: messages,
            context: context
        });
        return data?.text as string;    
    } catch (error) {
        console.log(error);
    }
    return "";
}