import styled from "styled-components";
import React from "react";
import { Icons } from "../Icon/Icon";
const FloatingButtonStyled = styled.button`
  cursor: pointer;
  position: fixed;
  width: 3.7rem;
  height: 3.7rem;
  bottom: 2.5rem;
  right: 2.5rem;
  background-color: ${(props) => (props.bg ? props.bg : "#3485FD")};
  color: #fff;
  border-radius: 50px;
  text-align: center;
  box-shadow: 2px 2px 3px #999;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
`;
const FloatingButton = (props) => {
  return (
    <FloatingButtonStyled {...props} type="submit">
      <Icons
        icon={props.icon}
        color={props.color}
        width={props?.width ? props.width : 20}
        height={props?.height ? props.height : 20}
      />
    </FloatingButtonStyled>
  );
};

export { FloatingButton };
