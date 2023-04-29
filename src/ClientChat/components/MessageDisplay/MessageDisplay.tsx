import { DisplayWrapper } from "./styled-components";
import { Message as MessageModel } from '../../../models';
import Message from "../Message/Message";

interface MessageDisplayProps {
    messages: Array<MessageModel>,
    addDots: boolean
}

const MessageDisplay = ({ messages, addDots }: MessageDisplayProps) => {
    return (
        <DisplayWrapper id="messageDisplay" className="scroll">
            {messages.map((msg: MessageModel, index: number) => (
                <Message
                    key={msg.text + index.toString()}
                    text={msg.text}
                    isFromUser={msg.fromUser}
                    isDots={false}
                />
            ))}

            {addDots &&
                <Message
                    text=""
                    isFromUser={false}
                    isDots={true}
                />
            }
        </DisplayWrapper>
    );
}

export default MessageDisplay;