import { Input, InputContainer, MessageInputWrapper, SendButton } from "./styled-components";
import { IoIosSend } from 'react-icons/io';
import { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";

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

            <InputContainer>
                <FiMessageCircle color="#A2A7AA" size={20} />

                <Input id="msgInput" type="text" placeholder="Send Message..." disabled={disabled} autoComplete="off" />
            </InputContainer>

            <SendButton disabled={disabled} backgroundColor={sendButtonBg} onClick={() => handleSendClick()}>
                <IoIosSend color="white" size={25} />
            </SendButton>
        </MessageInputWrapper>
    );
}

export default MessageInput;