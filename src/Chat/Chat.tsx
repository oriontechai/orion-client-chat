import { useEffect, useRef, useState } from "react";
import { getChatUiData, getClientChatCompletion } from "./chat.service";
import { Message as MessageModel } from '../models';
import MessageDisplay, { ChildComponentRef } from "./components/MessageDisplay/MessageDisplay";
import { 
    AiGif,
    Body,
    ChatHeaderContent,
    ChatHeaderGifContainer,
    ChatHeaderSection,
    ChatHeaderTitleContent,
    ChatSidebar, 
    ChatSidebarBlur, 
    ChatSidebarBox, 
    ChatSidebarContent, 
    ChatWrapper, 
    CompanyLogo, 
    CompanyMotto, 
    CompanyName, 
    Content, 
    FlexCenter, 
    ImageBackground, 
    LighterShadow, 
    PoweredBy,
    ScreenWrapper
} from "./styled.component";
import MessageInput from "./components/MessageInput/MessageInput";
import LoadingComponent from "./components/LoadingComponent/LoadingComponent";

const aiGifSlow = 'https://storage.googleapis.com/orion-client-chat/static/aiGifSlow.gif';
const aiGifFast = 'https://storage.googleapis.com/orion-client-chat/static/aiGifFast.gif';
const blackAiBg = 'https://storage.googleapis.com/orion-client-chat/static/black_ai_bg.jpg';
const white_logo = 'https://storage.googleapis.com/orion-client-chat/static/logo_o.png';
const orion_metal = 'https://storage.googleapis.com/orion-client-chat/static/ORION_METAL.png';

interface ChatUiDataDto{
    companyName: string;
    companyMotto: string;
    mainColor: string;
    darkerMainColor: string;
    fontColor: string;
    logo: string;
    chatBackgroundImage: string;
}

const CHAT_UI_INFO_DEFAULT: ChatUiDataDto = {
    companyName: "Orion",
    companyMotto: "Lema de la empresa",
    mainColor: "#000",
    darkerMainColor: "#000",
    fontColor: "#fff",
    logo: "",
    chatBackgroundImage: ""
}

interface ChatProps{
    jwtToken: string;
    baseUrl: string;
}

const Chat = ({ jwtToken, baseUrl } : ChatProps) => {

    const [chatUiInfo, setChatUiInfo] = useState<ChatUiDataDto>(CHAT_UI_INFO_DEFAULT);

    const [conversation, setConversation] = useState(Array<MessageModel>);

    const [disableMsgInput, setDisableMsgInput] = useState(false);

    const [loadingContent, setLoadingContent] = useState<boolean>(true);

    const messagDisplayeRef = useRef<ChildComponentRef>(null);

    useEffect(() => {
        setConversation([]);

        const getContext = async () => {
            const chatData = await getChatUiData(jwtToken, baseUrl) as ChatUiDataDto;
            setChatUiInfo(chatData);
            setLoadingContent(false);
        }

        getContext()
            .catch(console.error)
    }, []);

    const submitMessage = async (msgTxt: string, isFromUser: boolean) => {
        const msg: MessageModel = {
            text: msgTxt,
            fromUser: isFromUser
        };

        setConversation((prev) => [...prev, msg]);
        
        if (isFromUser) {
            setDisableMsgInput(true);

            let response = await getClientChatCompletion(jwtToken, baseUrl, [...conversation.slice(-10), msg]);

            await submitMessage(response, false);
            setDisableMsgInput(false);
            messagDisplayeRef.current?.scrollToBottom();
        }
    }

    return (
        <>
            {loadingContent ? <LoadingComponent /> :
                <ScreenWrapper>
                    <ImageBackground url={chatUiInfo.chatBackgroundImage ? chatUiInfo.chatBackgroundImage : blackAiBg} />
                    <FlexCenter>

                        <Content>
                            <LighterShadow />

                            <ChatSidebar>

                                <ChatSidebarBlur />

                                <ChatSidebarContent>

                                    <ChatSidebarBox>
                                        <CompanyLogo src={chatUiInfo.logo == "" ? white_logo : chatUiInfo.logo} />

                                        <CompanyName>{chatUiInfo.companyName}</CompanyName>

                                        <CompanyMotto>{chatUiInfo.companyMotto}</CompanyMotto>
                                    </ChatSidebarBox>

                                    <ChatSidebarBox>
                                        <PoweredBy>Artificial Intelligence Powered by:</PoweredBy>
                                        <img src={orion_metal} style={{ width: "3.5rem" }} />
                                    </ChatSidebarBox>

                                </ChatSidebarContent>

                            </ChatSidebar>

                            <Body>
                                <ChatWrapper>
                                    <ChatHeaderSection>
                                     <ChatHeaderContent>
                                        <ChatHeaderGifContainer>
                                            <AiGif src={disableMsgInput ? aiGifFast : aiGifSlow }/>
                                        </ChatHeaderGifContainer>
                                        <ChatHeaderTitleContent>{chatUiInfo.companyName} AI</ChatHeaderTitleContent>
                                     </ChatHeaderContent>
                                    </ChatHeaderSection>
                                    <MessageDisplay ref={messagDisplayeRef} messages={conversation} addDots={disableMsgInput} color={chatUiInfo.mainColor} />
                                    <MessageInput submitMessage={(msgTxt) => submitMessage(msgTxt, true)} disabled={disableMsgInput} sendButtonBg={chatUiInfo.mainColor} />
                                </ChatWrapper>
                            </Body>
                        </Content>
                    </FlexCenter>
                </ScreenWrapper>
            }
        </>

    );
}

export default Chat;