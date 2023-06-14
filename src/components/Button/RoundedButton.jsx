import styled from "styled-components";
import React from "react";
import { Icon } from '@iconify/react';
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
        <Icon icon={props.icon} color={props.color} />
    </RoundedButtonStyled>
}

export { RoundedButton }

