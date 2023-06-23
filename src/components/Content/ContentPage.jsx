import styled from "styled-components";
import React from "react";
const ContentPageStyled = styled.div`
  width: 100%;
  position: relative;
`;
const ContentPage = (props) => {
  return <ContentPageStyled {...props}>{props.children}</ContentPageStyled>;
};

export { ContentPage };
