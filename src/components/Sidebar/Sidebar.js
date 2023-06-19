import styled from "styled-components";
import React from "react";
const SidebarStyled = styled.div`
    margin-left: ${props => props.toogled ? '0rem' : '-15rem'};
    min-height: 100vh;
    transition: margin 0.25s ease-out;
`;
const Sidebar = (props) => {
    return <SidebarStyled {...props}>{props.children}</SidebarStyled>
}

export  { Sidebar }

