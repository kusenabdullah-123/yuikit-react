import styled from "styled-components";
import React from "react";
const WrapperStyled = styled.div`
    display: grid;
    grid-template-columns: 0fr 8fr;
`;
const Wrapper = (props) => {
    return <WrapperStyled {...props}>{props.children}</WrapperStyled>
}

export { Wrapper }
