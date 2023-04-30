import styled from "styled-components";

interface MessageContainerProps{
    isFromUser : boolean
}

export const MessageContainer = styled.div<MessageContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 25px/* 6px */ !important;
    border-bottom-left-radius: ${ props => props.isFromUser ? '25px' : '4px'} !important;
    border-bottom-right-radius: ${ props => props.isFromUser ? '4px' : '25px'} !important;
    width: fit-content;
    margin-top: 0.25rem/* 4px */ !important;
    margin-bottom: 0.25rem/* 4px */ !important;
    background-color: ${ props => props.isFromUser ? '#dfdfdf' : '#2C2D31'} !important; //#081A51 - #2C2D31
    margin-left: ${ props => props.isFromUser ? 'auto' : '0'} !important;
    margin-right: ${ props => props.isFromUser ? '0' : 'auto'} !important;
`;

export const MessageWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    max-width: 350px !important;
    @media (min-width: 700px){
        max-width: 410px !important;
    }
    padding: 0.5rem/* 8px */;
    word-break: break-word;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

interface TextProps{
    isFromUser : boolean;
} 

export const Text = styled.p<TextProps>`
    font-family: 'Poppins', 'sans-serif' !important;
    min-width: 2.4rem !important;
    font-size: 0.875rem/* 14px */ !important;
    line-height: 1.25rem/* 20px */ !important;
    margin-right: 0.5rem !important;
    margin: 3px !important;
    color: ${ props => props.isFromUser ? '#000000' : '#ffffff'} !important;
`;