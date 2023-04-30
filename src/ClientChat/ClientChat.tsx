import { useEffect, useState } from "react";

// STYLED COMPONENTS
import { 
    ScreenWrapper, 
    ImageBackground,
    Shadow,
    ChatWrapper, 
    TitleContainer, 
    Title, 
    Content,
    PoweredBy,
    CompanyLogo,
    PoweredByContainer
} from "./styled-components";

// COMPONENTS
import { 
    MessageDisplay,
    MessageInput
} from './components';

// MOPDELS
import { Message as MessageModel } from "../models";

// SERVICES 
import { getClientChatCompletion } from "../services";

const ClientChat = () => {

    //const userId = useSelector((state: RootState) => state.uid);

    const [context, setContext] = useState<string>("");

    const [companyName, setCompanyName] = useState<string>("ORION");

    // APPEARANCE VARIABLES 
    const [headerBgColor, setHeaderBgColor] = useState<string>("#000");
    const [headerDarkerBgColor, setHeaderDarkerBgColor] = useState<string>("#000");
    const [headerFontColor, setHeaderFontColor] = useState<string>("#fff");

    const [conversation, setConversation] = useState(Array<MessageModel>);

    const [disableMsgInput, setDisableMsgInput] = useState(false);

    const [logoUrl, setLogoUrl] = useState<string>("");

    const [bgImage, setBgImage] = useState<string>("");

    useEffect(() => {
        setConversation([]);

        setContext("");
        setCompanyName("Orion");
        setHeaderBgColor("#000");
        setHeaderDarkerBgColor("#000");
        setHeaderFontColor("#fff");
        setLogoUrl("");
        setBgImage("");

    }, []);

    const submitMessage = async (msgTxt: string, isFromUser: boolean) => {
        const msg:  MessageModel = {
            text: msgTxt, 
            fromUser: isFromUser
        };

        setConversation((prev) => [...prev, msg]);

        const msgsCotainer = (document.getElementById("messageDisplay") as HTMLInputElement);
        msgsCotainer.scrollTop = msgsCotainer.scrollHeight;

        if (isFromUser) {
            setDisableMsgInput(true);
            
            const response = await getClientChatCompletion([...conversation.slice(-10), msg], context);
            submitMessage(response, false);
            setDisableMsgInput(false);
        }
    }

    return(
        <ScreenWrapper>
            <ImageBackground url={ bgImage ? bgImage : "https://storage.googleapis.com/orion-client-chat/static/client-bg.jpg"} />
            <Shadow />

            <Content>
                <CompanyLogo src={ logoUrl == "" ? "https://storage.googleapis.com/orion-client-chat/static/logo_o.png" : logoUrl}/>

                <ChatWrapper>
                    <TitleContainer backgroundColor={headerBgColor} darkerColor={headerDarkerBgColor}>
                        <Title textColor={headerFontColor}>{companyName}</Title>
                    </TitleContainer>
                    <MessageDisplay messages={conversation} addDots={disableMsgInput}/>
                    <MessageInput submitMessage={(msgTxt) => submitMessage(msgTxt, true)} disabled={disableMsgInput} sendButtonBg={headerBgColor}/>
                </ChatWrapper>

                <PoweredByContainer>
                    <PoweredBy>Artificial Intelligence Powered by:</PoweredBy>
                    <img src="https://storage.googleapis.com/orion-client-chat/static/ORION_METAL.png" style={{ width: "4.5rem"}}/>
                </PoweredByContainer>

                
            </Content>
            
        </ScreenWrapper>
    );
}

export default ClientChat;