import styled from "styled-components";
import React from "react";

const LabelStyled = styled.label`
    margin-bottom: .3rem;
    display: inline-block;
`
const Label = (props) => {
    return <LabelStyled {...props}>{props.name}</LabelStyled>
}
export { Label }