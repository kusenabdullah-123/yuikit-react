import styled from "styled-components";
import React, { useId } from "react";
import { MenuAction } from "./MenuAction"
import { RoundedButton } from "../Button/RoundedButton";

const TableStyled = styled.table`
    border-collapse: collapse;
    width: 100%;
    box-sizing: border-box;
`;

const TheadStyled = styled.thead``

const ThStyled = styled.th`
    padding: .5rem;
    text-align: left;`

const TbodyStyled = styled.tbody``

const TrStyled = styled.tr`
    border-bottom: 1px solid;
    border-color: #d9d9d9;
    &:nth-child(even) {
        box-shadow: inset 0 0 0 999px rgba(34, 29, 29, 0.09);
    }`

const TdStyled = styled.td`
padding: .5rem;`


const Table = (props) => {
    const head = props?.head ? props?.head : []
    const body = props?.body ? props?.body : [];
    const action = props?.action ? props?.action : [{ url: "", icon: "" }];
    return <TableStyled>
        <TheadStyled>
            <tr>
                {head.map(th => {
                    return <ThStyled key={useId()}>{th}</ThStyled>
                })}
            </tr>
        </TheadStyled>
        <TbodyStyled>
            {
                body.map((row) => {
                    
                    return <TrStyled key={useId()}>
                        {
                            row.map(td => {
                               
                                return <TdStyled key={useId()}>{td}</TdStyled>
                            })
                        }
                        <TdStyled>
                            <MenuAction key={useId()}>
                                {
                                    action.map((ac) => {
                                        return <RoundedButton key={useId()} icon={ac.icon} color="white" go={ac.url} />
                                    })
                                }
                            </MenuAction>
                        </TdStyled>
                    </TrStyled>
                })
            }

        </TbodyStyled>
    </TableStyled>
}

export { Table }

