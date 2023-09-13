import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import url from '../../../accets/buttons/edit.png';
import { device } from '../../../global/theme/index';

export const StyledEditButton = styled.button`
    height: 32px;
    width: 32px;
    border: none;
    background-color: transparent;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 2px;
    position: absolute;
    top: 11px;
    left: 180px;

    @media ${device.laptop} { 
        height: 23px;
        width: 23px;
        left: 126px;
    }

    &::after {
        content: "";
        position: absolute;
        left: 0;
        display: block;
        width: 28px;
        height: 28px;
        top: 0;
        background-image: url('${url}');
        background-size: contain;
        background-repeat: no-repeat;

        @media ${device.laptop} { 
            width: 18px;
            height: 18px;
        }
    }

    &:hover {
        background-color: ${variables.colorButtonHover};
    }
`