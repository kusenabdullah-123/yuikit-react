import styled from "styled-components";
import React from "react";
import { Icons } from "../Icon/Icon";
const RoundedButtonStyled = styled.a`
    cursor: pointer;
    margin-right: .5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0C9;
`;
const RoundedButton = (props) => {
    return <RoundedButtonStyled {...props}>
        <Icons icon={props.icon} color={props.color} width={props?.width ? props.width : 20} height={props?.height ? props.height : 20} />
    </RoundedButtonStyled>
}

export { RoundedButton }

