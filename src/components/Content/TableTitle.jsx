import styled from "styled-components";
import React from "react";
const TitleTableStyled = styled.h1`

`;
const TitleTable = (props) => {
    return <TitleTableStyled {...props}>{props.children}</TitleTableStyled>
}

export { TitleTable }

