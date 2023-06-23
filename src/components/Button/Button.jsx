import styled from "styled-components";
import React from "react";
import { Icons } from "../Icon/Icon";
import { Link } from "react-router-dom";
const IconStyled = styled(Icons)`
margin-right: 0.5rem;
`
const WrapperInsert = styled.div`
    display: flex;
    justify-content: end;
`
const ButtonStyled = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.bg ? props.bg : '#1976D2'};
    color: #ffffff;
    min-width: 3rem;
    border: 0;
    padding:.7rem;
    border-radius:.7rem;
    text-decoration: none;
`
const Button = (props) => {
    return (
        <WrapperInsert>
            <ButtonStyled to={props.go} bg={props.bg}>
                <IconStyled icon="ic:baseline-plus" color="#ffffff" width="23" height="23" />
                {props.name || "Baru"}
            </ButtonStyled>
        </WrapperInsert>
    )
}

export { Button }