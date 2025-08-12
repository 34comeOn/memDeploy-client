import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import { device } from '../../../global/theme/index';

export const StyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100px;
    width: 100%;

    @media ${device.laptop} { 
        height: 80px;
    }

    @media ${device.tablet} {
        height: 50px;
    }
`