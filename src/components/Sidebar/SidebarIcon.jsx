import styled from "styled-components";
import React from "react";
import { Icons } from "../Icon/Icon";

const SidebarIconStyle = styled.div`
  margin-right: 0.2rem;
`;
const SidebarIcon = (props) => {
  return (
    <>
      <SidebarIconStyle {...props}>
        <Icons
          icon={props.icon}
          width={props?.width ? props.width : 30}
          height={props?.height ? props.height : 30}
          color={props.color}
        />
      </SidebarIconStyle>
      {props?.title ? props.title : "default Menu"}
    </>
  );
};
export { SidebarIcon };
