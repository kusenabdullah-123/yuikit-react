import styled from "styled-components";
import React from "react";
const MenuActionStyled = styled.div`
  display: flex;
  flex-direction: row;
`;
const MenuAction = (props) => {
  return <MenuActionStyled {...props}>{props.children}</MenuActionStyled>;
};

export { MenuAction };
