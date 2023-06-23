import styled from "styled-components";
import React from "react";

const SidebarHeadingStyle = styled.div`
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
`;
const SidebarHeading = (props) => {
  return <SidebarHeadingStyle {...props}>{props.children}</SidebarHeadingStyle>;
};
export { SidebarHeading };
