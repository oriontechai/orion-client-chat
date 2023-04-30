import styled from "styled-components";

export const DisplayWrapper = styled.div`
    overflow-y: scroll;
    width: 98%;
    height: 100%;
    margin-bottom: 1rem/* 112px */;
    @media (min-width: 640px) {
        width: 100%;
        padding-right: 1rem;
    }
`;