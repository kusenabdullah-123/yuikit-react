import styled from "styled-components";
import React from "react";
import { Icon } from '@iconify/react';

const ToogleButtonStyled = styled.div`
    cursor: pointer;
`;
const ToogleButton = (props) => {
    return <ToogleButtonStyled>
        <Icon {...props} icon={props.icon} width={props?.width ? props.width : 30} height={props?.height ? props.height : 30} />
    </ToogleButtonStyled>
}

export { ToogleButton }

