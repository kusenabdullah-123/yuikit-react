import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const SidebarItemStyle = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
  width: 15rem;
  border-bottom: solid 1px #dee2e6;
  margin-top: 0.4rem;
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;
const SidebarItem = (props) => {
  return <SidebarItemStyle to={props.go}>{props.children}</SidebarItemStyle>;
};
export { SidebarItem };
