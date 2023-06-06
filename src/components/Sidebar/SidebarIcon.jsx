import styled from "styled-components";
import React from "react";

const SidebarIconStyle = styled.div`
    margin-right: .2rem;
`
const SidebarIcon = (props) => {
    return <SidebarIconStyle {...props}>{props.children}</SidebarIconStyle>
}
export { SidebarIcon }