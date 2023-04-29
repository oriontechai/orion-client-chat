import styled from "styled-components";

export const ScreenWrapper = styled.div`
    width: 100vw;
    height: 100vh;
`;

interface ImageBackgroundProps{
    url : string
}

export const ImageBackground = styled.div<ImageBackgroundProps>`
    background-size: cover;
    background-image: ${({ url }) => `url('${url}')`};
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: 0;
`;

export const Shadow = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.63;
    z-index: 0;
    background-color: #010101;
`;

export const Content = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100vh;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const ChatWrapper = styled.div`
    position: relative;
    height: 70%;
    width: 75%;
    min-height: 500px;
    max-width: 974px;
    max-height: 540px;
    background-color: #FFFFFFB8;
    border-radius: 1.5rem/* 24px */;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-self: center;
    justify-self: center;
    padding-bottom: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    overflow: hidden;
`;

interface TitleContainerProps{
    backgroundColor: string
    darkerColor: string;
}

export const TitleContainer = styled.div<TitleContainerProps>`
    width: 102%;
    height: 4rem;
    background-image: linear-gradient(173deg, ${ props => props.backgroundColor } 37%, ${ props => props.darkerColor } 97%);
    margin-left: -1rem;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 1rem;
`; 

interface TitleProps{
    textColor: string; 
}

export const Title = styled.h2<TitleProps>`
    font-family: 'Poppins', 'sans-serif';
    font-size: 1rem;
    letter-spacing: 8.2px;
    text-transform: uppercase;    
    margin: 0;
    color: ${ props => props.textColor };
`;

export const PoweredBy = styled.h6`
    font-weight: 300;
    font-family: 'Poppins', 'sans-serif';
    color: #666666;
    margin-bottom: 15px;
`;