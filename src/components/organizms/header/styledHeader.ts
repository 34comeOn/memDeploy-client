import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import { device } from '../../../global/theme/index';

export const StyledHeader = styled.header`
    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 115px;
    width: calc(100% - 40px);
    padding: 0 20px;
    background-color: rgba(0, 0, 0, 0.88);
    backdrop-filter: blur(2px);
    box-shadow: 0px 29px 24px -33px rgb(194 194 194 / 25%);

    @media ${device.laptop} { 
        height: 90px;
    }

    @media ${device.tablet} { 
        width: calc(100% - 20px);
        padding: 0 10px;
    }
`