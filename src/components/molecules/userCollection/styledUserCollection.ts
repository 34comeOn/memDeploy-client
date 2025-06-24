import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import { device } from '../../../global/theme/index';

type TcollectionColor = {
    color: string;
  }

export const StyledUserCollection = styled.li<TcollectionColor>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 300px;
    height: 250px;
    margin: 15px;
    padding-bottom: 7px;
    border-radius: 25px;
    background-color: ${props => props.color? props.color: variables.colorMenuPurple};
    box-shadow: black 5px 5px 10px -4px;
    
    &:hover {
      cursor: pointer;
      outline: 2px solid silver;
    }

    @media ${device.laptop} { 
      width: 200px;
      height: 170px;
      margin: 8px;
      border-radius: 15px;
    }
`;