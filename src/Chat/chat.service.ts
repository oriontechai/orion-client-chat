import axios, { HttpStatusCode } from "axios";
import { Message } from "../models";

export const getChatUiData = async(token: string, baseUrl: string) => {
    const res = await axios.get(`${baseUrl}/api/v1/user/chat-ui-data`, {
        headers : {
            'Authorization' : `Bearer ${token}`
        }
    });

    if(res.status == HttpStatusCode.Ok){
        return res.data;
    }

    console.log(res.data.message);   
}


export const getClientChatCompletion = async (token:string, baseUrl: string, messages: Array<Message>) => {
    try {
        const { data } = await axios.post(`${baseUrl}/api/v1/chat/client/get-completion`, { messages: messages }, {
            headers : {
                'Authorization' : `Bearer ${token}`
            }
        });
        return data?.completion.text as string;    
    } catch (error) {
        console.log(error);
    }
    return "";
}