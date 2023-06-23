import styled from "styled-components";
import React from "react";
const TopBarStyled = styled.div``;
const TopBar = (props) => {
  return <TopBarStyled {...props}>{props.children}</TopBarStyled>;
};

export { TopBar };
