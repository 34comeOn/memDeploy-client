import styled from "styled-components";
import { device } from '../../../../global/theme/index';
import variables from '../../../../sass/variables.module.scss';

export const StyledLabel = styled.label`
    font-size: 15px;
    color: ${variables.colorFontDark};
    cursor: pointer;
    display: flex;
    margin-top: 15px;
    align-items: flex-start;
    flex-direction: row;
    line-height: 18px;

    @media ${device.laptop} { 
        font-size: 12px;
    }

    :hover {
        text-decoration: underline;
    }
`