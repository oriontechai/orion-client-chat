import styled from "styled-components";

export const MessageInputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    @media (min-width: 1200px) {
        min-height: 55px;
    }
`;

export const InputContainer = styled.div`
    flex: 1 1 0%;
    border-color: rgb(209 213 219);
    background-color: #fefefe;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    border-radius: 9999px;
    display: flex;
    padding: 0.5rem 1.5rem;
    align-items: center;
    color: rgb(75 85 99);
    font-family: 'Jost', sans-serif;
`;

export const Input = styled.input`
    font-family: 'Jost', sans-serif;
    outline: 2px solid transparent;
    margin-left: 15px;
    outline-offset: 2px;
    font-size: 0.8rem;
    caret-color: #4b5563;
    flex: 1 1 0%;
    border: 0 !important;
    padding: 0 !important;
    color: #141414;
    @media (min-width: 1200px) {
        font-size: 1rem;
    }
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
    margin-left: 0.8rem/* 12px */;
    border: 0;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    &:hover{
        filter: brightness(1.25);
        transform: scale(1.05);
        transition-duration: 400ms;
    }
    @media (min-width: 1200px) {
        margin-left: 1.5rem/* 12px */;
        padding: 0.5rem 0.9rem/* 8px */;
    }
`;