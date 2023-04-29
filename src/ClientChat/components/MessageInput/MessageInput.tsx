import { Input, MessageInputWrapper, SendButton } from "./styled-components";
import { IoIosSend } from 'react-icons/io';
import { useEffect } from "react";

interface MessageInputProps {
    submitMessage: (msg: string) => void;
    disabled: boolean;
    sendButtonBg?: string
}

const MessageInput = ({ submitMessage, disabled, sendButtonBg }: MessageInputProps,) => {

    const handleSendClick = () => {
        const inputEle = (document.getElementById("msgInput") as HTMLInputElement);
        if (inputEle.value.length > 0) {
            submitMessage(inputEle.value);
            inputEle.value = "";
        }
    }
    useEffect(() => {
        const listener = (e: any) => {
            if (e.code === "Enter") {
                handleSendClick();
            };
        };

        document.addEventListener("keydown", listener);
        return () => document.removeEventListener("keydown", listener);
    });

    return (
        <MessageInputWrapper>
            <Input id="msgInput" type="text" placeholder="Send Message..." disabled={disabled} />

            <SendButton disabled={disabled} backgroundColor={sendButtonBg} onClick={() => handleSendClick()}>
                <IoIosSend color="white" size={25} />
            </SendButton>
        </MessageInputWrapper>
    );
}

export default MessageInput;