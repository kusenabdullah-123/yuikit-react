import styled from "styled-components";
import React, { forwardRef } from "react";
import { Label } from "./Label";
const FormInputStyled = styled.div`
  margin-bottom: 1.1rem;
`;
const InputStyled = styled.input`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.37rem;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: #0c9 1px solid;
  }
`;
const TextAreaStyled = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dee2e6;
  border-radius: 0.37rem;
  appearance: none;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:focus {
    outline: #0c9 1px solid;
  }
`;
const FormInput = forwardRef((props, ref) => {
  return (
    <FormInputStyled>
      <Label htmlFor={props.id} name={props.labelname} />
      {props.textinput || props.passwordinput ? (
        <InputStyled
          ref={ref}
          {...props}
          type={props.passwordinput ? "password" : "text"}
        />
      ) : (
        <TextAreaStyled ref={ref} {...props} />
      )}
    </FormInputStyled>
  );
});

export { FormInput };
