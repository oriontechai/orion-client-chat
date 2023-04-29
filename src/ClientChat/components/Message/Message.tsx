import { 
    MessageContainer, 
    MessageWrapper, 
    Text,
    TextContainer
} from "./styled-components";

interface MessageProps {
    text: string;
    isFromUser: boolean;
    isDots: boolean;
}

const Message = ({ text, isFromUser, isDots }: MessageProps) => {

    const content = !isDots ?
        <TextContainer>
            {text.split("\n").map( (c) => {
                if(c !== ''){
                    return(
                        <Text key={c} isFromUser={isFromUser}>
                            {c}
                        </Text> 
                    );
                }
            })}
        </TextContainer> 
        : 
        <div className="chat-bubble">
            <div className="typing">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>

    return (
        <MessageContainer isFromUser={isFromUser}>
            <MessageWrapper>
                {content}
            </MessageWrapper>
        </MessageContainer>
    );
}

export default Message;




