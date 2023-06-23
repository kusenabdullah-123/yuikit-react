import styled from "styled-components";
import React from "react";

const FormFileStyled = styled.div`
  margin-bottom: 1.1rem;
`;
const InputFileStyled = styled.input`
  outline: none;
  width: 18rem;
  max-width: 100%;
  color: #444;
  padding: 0.3rem;
  background: #fff;
  border-radius: 1rem;
  border: 1px solid #0d6efd;

  &::file-selector-button {
    margin-right: 1.2rem;
    border: none;
    background: #084cdf;
    padding: 0.625rem 1.2rem;
    border-radius: 0.7rem;
    color: #fff;
    cursor: pointer;
  }
`;
const FormFile = (props) => {
  return (
    <FormFileStyled>
      <InputFileStyled type="file" {...props} />
    </FormFileStyled>
  );
};

export { FormFile };
