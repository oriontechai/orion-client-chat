import { DisplayWrapper, MessagesDisplay, TopWhiteSpace } from "./styled-components";
import { Message as MessageModel } from '../../../models';
import Message from "../Message/Message";
import { forwardRef, useImperativeHandle, useRef } from "react";

interface MessageDisplayProps {
    messages: Array<MessageModel>;
    addDots: boolean;
    color: string | undefined;

}

export type ChildComponentRef = {
    scrollToBottom: () => void;
};

const MessageDisplay = forwardRef(({ messages, addDots, color } : MessageDisplayProps, ref) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    function scrollToBottom(){
        if(scrollRef.current != null){
            const scrollToHeight = document.getElementById("messageDisplay")?.scrollHeight;

            if(scrollToHeight != undefined){
                scrollRef.current.scrollTop = scrollToHeight;
            }else{
                scrollRef.current.scrollTop = 0 ;
            }
        }
    }

    useImperativeHandle(ref, () => ({
        scrollToBottom
    }));

    return (
        <DisplayWrapper ref={scrollRef} id="messageDisplay" className="scroll">
            <TopWhiteSpace />

            <MessagesDisplay>
                {messages.map((msg: MessageModel, index: number) => (
                    <Message
                        color={color}
                        key={msg.text + index.toString()}
                        text={msg.text}
                        isFromUser={msg.fromUser}
                        isDots={false}
                    />
                ))}

                {addDots &&
                    <Message
                        color={color}
                        text=""
                        isFromUser={false}
                        isDots={true}
                    />
                }
            </MessagesDisplay>
            
        </DisplayWrapper>
    );
});

export default MessageDisplay;