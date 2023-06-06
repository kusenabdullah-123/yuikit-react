import styled from "styled-components";
import React from "react";

const SidebarItemStyle = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: .5rem;
    width: 15rem;
    border-bottom: solid 1px #dee2e6;
    margin-top: .4rem;
`
const SidebarItem = (props) => {
    return <SidebarItemStyle {...props}>{props.children}</SidebarItemStyle>
}
export { SidebarItem }