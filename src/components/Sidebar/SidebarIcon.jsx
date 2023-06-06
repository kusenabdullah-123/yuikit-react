import styled from "styled-components";
import React from "react";
import { Icon } from '@iconify/react';

const SidebarIconStyle = styled.a`
    margin-right: .2rem;
`
const SidebarIcon = (props) => {
    return <SidebarIconStyle {...props}>
        <Icon icon={props.icon} />
        {props?.title ? props.title : "default Menu"}
    </SidebarIconStyle>
}
export { SidebarIcon }