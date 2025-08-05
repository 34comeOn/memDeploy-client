import styled from "styled-components";
import { device } from "../../../global/theme";
import variables from '../../../sass/variables.module.scss';

export const StyledUserCollectionsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    
    max-width: 1400px;
    min-width: min-content;
    min-height: 200px;
    background-color: ${variables.colorBackgroundRepeatList};
    list-style: none;
    border-radius: 15px;
    margin-left: 20px;
    margin-right: 20px;
    padding: 0px;

    @media ${device.tablet} { 
        margin-left: 0;
        margin-right: 0;
    }
`