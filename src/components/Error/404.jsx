import React from "react";
import styled from "styled-components";
import { Container } from "../Wrapper/Container";
const ErrorPageStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
`;
import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <ErrorPageStyled>
      <Container>
        <h1> 404 Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Container>
    </ErrorPageStyled>
  );
};
export { ErrorPage };
