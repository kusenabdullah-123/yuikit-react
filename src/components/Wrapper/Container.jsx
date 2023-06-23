import styled from "styled-components";
import React from "react";
const ContainerStyled = styled.div`
  padding: 1.5rem;
  position: relative;
`;
const Container = (props) => {
  return <ContainerStyled {...props}>{props.children}</ContainerStyled>;
};

export { Container };
