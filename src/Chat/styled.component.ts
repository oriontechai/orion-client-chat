import styled from "styled-components";

export const ScreenWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`; 

interface ImageBackgroundProps{
    url : string
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
    background-position: center center;
    background-size: cover;
    background-image: ${({ url }) => `url('${url}')`};
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: 0;
`;

export const FlexCenter = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    position: relative;
    height: 90%;
    width: 70%;
    background-color: transparent;
    border-radius: 1.75rem/* 24px */;
    display: flex;
    align-self: center;
    justify-self: center;
`;

export const LighterShadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1.75rem;
    opacity: 0.3;
    background-color: #010101;
`;

export const ChatSidebar = styled.div`
    position: relative;
    z-index: 1;
    width: 18rem;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    padding: 4rem 1.25rem/* 20px */;
    z-index: 1;
    position: relative;
    background-color: transparent;
    color: #fefefe;
    font-family: 'Jost', sans-serif;
`;

export const ChatSidebarBlur = styled.div`
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    background: rgba( 255, 255, 255, 0.1 );
    backdrop-filter: blur( 6px );
    -webkit-backdrop-filter: blur( 6px );
`;

export const ChatSidebarContent = styled.div`
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const ChatSidebarBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 4rem 0;
`;

export const CompanyLogo = styled.img`
    height: 6.5rem;
`;

export const CompanyName = styled.h1`
    margin-top: 1rem;
    font-weight: 300;
    margin-bottom: 0;
    font-size: 1.5rem;
    text-align: center;
`;

export const CompanyMotto = styled.h2`
    font-size: 1.2rem;
    font-weight: 100;
    color: #A2A7AA;
    margin: 0;
    font-style: italic;
    text-align: center;
`;

export const PoweredBy = styled.h6`
    font-weight: 300;
    color: #c9c9c9;
    margin-bottom: 15px;
`;

export const Body = styled.div`
    flex: 1 1 0%;
    padding-top: 2rem;
    padding-bottom: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
    background-color: rgba(255, 255, 255, 0.65);
    border-top-right-radius: 1.5rem/* 24px */;
    border-bottom-right-radius: 1.5rem/* 24px */;
    z-index: 10;
`;

export const ChatWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ChatHeaderSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ChatHeaderContent = styled.div`
    position: relative;
    height: 50px;
    width: 310px;
`;

export const ChatHeaderGifContainer = styled.div`
    position: absolute;
    top: 0;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #141414;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`;

export const AiGif = styled.img`
    width: 40px;
`;

export const ChatHeaderTitleContent = styled.div`
    position: absolute;
    top: 5px;
    left: 20px;
    z-index: 0;
    height: 40px;
    width: 300px;
    background-color: black;
    border-radius: 9999px;
    text-transform: uppercase;
    color: #fefefe;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Jost', sans-serif;
`;

interface BackButtonProps{
    backgroundColor?: string;
}

export const BackButton = styled.button<BackButtonProps>`
    position: absolute;
    z-index: 20;
    top: 10px;
    left: 10px;
    background: ${ props => props.backgroundColor !== undefined ? props.backgroundColor : 'linear-gradient(to right, #B401FF, #2AA3FF)'} ;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9999px;
    margin-left: 1.5rem/* 12px */;
    padding: 0.5rem 0.9rem/* 8px */;
    border: 0;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    &:hover{
        filter: brightness(1.25);
        transform: scale(1.05);
        transition-duration: 400ms;
    }
`;