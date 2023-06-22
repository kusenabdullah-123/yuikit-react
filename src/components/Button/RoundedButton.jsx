import styled from "styled-components";
import React from "react";
import { Icons } from "../Icon/Icon";
import { Link } from "react-router-dom";
const RoundedButtonStyledLink = styled(Link)`
    cursor: pointer;
    margin-right: .5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bg ? props.bg : '#3485FD'};
`;
const RoundedButtonStyled = styled.button`
    cursor: pointer;
    margin-right: .5rem;
    width: 2rem;
    height: 2rem;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    outline:none;
    border: 0;
    background-color: ${props => props.bg ? props.bg : '#3485FD'};
`
const RoundedButton = (props) => {
    if (props.type == "link") {
        return <RoundedButtonStyledLink to={props.go} bg={props.bg}>
            <Icons icon={props.icon} color={props.color} width={props?.width ? props.width : 20} height={props?.height ? props.height : 20} />
        </RoundedButtonStyledLink>
    }
    return <RoundedButtonStyled bg={props.bg}>
        <Icons icon={props.icon} color={props.color} width={props?.width ? props.width : 20} height={props?.height ? props.height : 20} />
    </RoundedButtonStyled>
}

export { RoundedButton }

