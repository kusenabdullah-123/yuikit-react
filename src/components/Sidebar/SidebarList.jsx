import styled from "styled-components";
import React from "react";

const SidebarListStyle = styled.div`
    list-style-type: none;
    margin: 0;
    padding: 0;
`
const SidebarList = (props) => {
    return <SidebarListStyle {...props}>{props.children}</SidebarListStyle>
}
export { SidebarList }