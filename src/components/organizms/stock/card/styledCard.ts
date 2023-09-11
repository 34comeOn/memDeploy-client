import styled from 'styled-components';
import variables from '../../../../sass/variables.module.scss';
import { device } from '../../../../global/theme/index';

export const StyledCard = styled.div`
    width: -webkit-fill-available;
    min-height: 500px;
    max-heigth: 650px;
    height: min-content;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${variables.colorBackgroundRepeatList};
    margin: 28px auto;
    border-radius: 12px;
    position: sticky;
    top: 20px;

    @media ${device.laptop} { 
        padding: 5px;
    }
`