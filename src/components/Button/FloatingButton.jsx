import styled from "styled-components";
import React from "react";
const FloatingButtonStyled = styled.div`
`;
const FloatingButton = (props) => {
    return <FloatingButtonStyled {...props}>{props.children}</FloatingButtonStyled>
}

export { FloatingButton }

