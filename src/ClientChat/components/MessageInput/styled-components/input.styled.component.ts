import styled from "styled-components";

export const MessageInputWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    @media (min-width: 640px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    flex: 1 1 0% !important;
    border-color: rgb(209 213 219) !important;
    border-width: 0px !important;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
    padding: 0.5rem 1rem !important;
    border-radius: 9999px !important;
    outline: 2px solid transparent !important;
    outline-offset: 2px !important;
    caret-color: #4b5563 !important;
    color: rgb(75 85 99) !important;
    font-family: 'Poppins', 'sans-serif' !important;
    font-size: 0.875rem !important;
`;

interface SendButtonProps{
    backgroundColor?: string;
}

export const SendButton = styled.button<SendButtonProps>`
    background: ${ props => props.backgroundColor !== undefined ? props.backgroundColor : 'linear-gradient(to right, #B401FF, #2AA3FF)'} !important;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px !important;
    margin-left: 0.75rem/* 12px */ !important;
    padding: 0.5rem/* 8px */ !important;
    border: 0 !important;
`;