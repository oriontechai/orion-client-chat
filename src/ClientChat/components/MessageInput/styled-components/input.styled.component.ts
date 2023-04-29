import styled from "styled-components";

export const MessageInputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Input = styled.input`
    flex: 1 1 0%;
    border-color: rgb(209 213 219);
    border-width: 0px;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    padding: 0.5rem 1rem;
    border-radius: 9999px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    caret-color: #4b5563;
    color: rgb(75 85 99);
    font-family: 'Poppins', 'sans-serif';
`;

interface SendButtonProps{
    backgroundColor?: string;
}

export const SendButton = styled.button<SendButtonProps>`
    background: ${ props => props.backgroundColor !== undefined ? props.backgroundColor : 'linear-gradient(to right, #B401FF, #2AA3FF)'} ;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    margin-left: 0.75rem/* 12px */;
    padding: 0.5rem/* 8px */;
    border: 0;
`;