import styled from "styled-components";
import React from "react";
const ContainerStyled = styled.div`
    padding: 1.5rem;
    position: relative;
`;
const Container = ({ children }) => {
    return <ContainerStyled>{children}</ContainerStyled>
}

export { Container }
