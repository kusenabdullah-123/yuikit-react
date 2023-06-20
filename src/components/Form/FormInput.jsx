import styled from "styled-components";
import React from "react";
import { Label } from "./Label";

const FormInputStyled = styled.div`
    margin-bottom: 1.1rem;
`
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
    border-radius: .37rem;
    appearance: none;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    &:focus {
        outline: #0C9 1px solid;
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
    border-radius: .37rem;
    appearance: none;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
    &:focus {
        outline: #0C9 1px solid;
    }
`
const FormInput = (props) => {
    return <FormInputStyled>
        <Label htmlFor={props.id} name={props.labelname}/>
        {
            props.textinput || props.passwordinput ? <InputStyled {...props} type={props.passwordinput ? "password" : "text"} /> : <TextAreaStyled {...props} />
        }
    </FormInputStyled>
}

export { FormInput }

