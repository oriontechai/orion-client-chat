import {
    MessageContainer,
    MessageWrapper,
    Text,
    TextContainer
} from "./styled-components";
import "./styled.css";

interface MessageProps {
    text: string;
    isFromUser: boolean;
    isDots: boolean;
    color: string | undefined;
}

const Message = ({ text, isFromUser, isDots, color }: MessageProps) => {

    const content = !isDots ?
        <TextContainer>
            {text.split("\n").map((c) => {
                if (c !== '') {
                    return (
                        <ULink key={c} text={c} isFromUser={isFromUser}/>
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
        <MessageContainer isFromUser={isFromUser} color={color}>
            <MessageWrapper>
                {content}
            </MessageWrapper>
        </MessageContainer>
    );
}

interface Props {
    text: string;
    isFromUser: boolean;
}

const ULink: React.FC<Props> = ({ text, isFromUser }) => {
    // Regular expression to match <u> tags with href attributes
    const pattern = /\[(.*?)\]\((.*?)\)/g;

    // Replace <u> tags with link elements
    const replacedText = text.replace(pattern, '<a href="$2" target="_blank"><u>$1</u></a>');

    return (
        <Text isFromUser={isFromUser} dangerouslySetInnerHTML={{ __html: replacedText }}></Text>
    );
}

export default Message;




