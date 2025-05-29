import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import { device } from '../../../global/theme/index';

type TcollectionColor = {
    color: string;
  }

export const StyledUserCollection = styled.li<TcollectionColor>`
    min-width: 300px;
    height: 250px;
    background-color: ${props => props.color? props.color: variables.colorMenuPurple};
    margin: 15px;
    border-radius: 15px;
    padding-bottom: 7px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    box-shadow: black 5px 5px 10px -4px;
    
    &:hover {
      cursor: pointer;
      box-shadow: silver 3px 3px 6px -4px;
    }

    @media ${device.laptop} { 
      min-width: 200px;
      width: 200px;
      height: 170px;
      margin: 8px;
    }
`;