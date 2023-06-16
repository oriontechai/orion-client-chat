import { FlexCenter, ScreenWrapper } from './styled.component';
import styled from 'styled-components';
import { keyframes } from '@mui/styled-engine-sc';
import logo from '../../assets/orion_black.png';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Rotate = styled.img`
    width: 80px;
    height: 80px;
    display: inline-block;
    animation: ${rotate} 2s linear infinite;
    padding: 2rem 1rem;
    font-size: 1.2rem;
`;

const LoadingComponent = () => {
    return (
        <ScreenWrapper>
            <FlexCenter style={{ height: "100%" }}>
                <Rotate src={logo} />
            </FlexCenter>
        </ScreenWrapper>
    );
}

export default LoadingComponent;