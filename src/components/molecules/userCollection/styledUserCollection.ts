import styled from "styled-components";
import variables from '../../../sass/variables.module.scss';
import { device } from '../../../global/theme/index';

type TcollectionColor = {
    color: string;
    isShowingAnimation?: boolean;
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
    background-color: ${props => props.color ? props.color: variables.colorMenuPurple};
    box-shadow: black 5px 5px 10px -4px;
    
    &:hover {
      cursor: pointer;
      outline: 2px solid silver;
    }

    @property --angle{
      syntax: "<angle>";
      initial-value: 0deg;
      inherits: false;
    }

    &::before, &::after {
      background-image: conic-gradient(from var(--angle), #ff4545, #00ff99, #006aff, #ff0195, #ff4545);
      animation: 2s spin linear infinite;
      content: ${props => props.isShowingAnimation ?  '""': ''};
      position: absolute;
      z-index: -1;
      top: -3px;
      left: -3px;
      height: 264px;
      width: 306px;
      border-radius: 28px;

      @media ${device.laptop} { 
        width: 206px;
        height: 184px;
        border-radius: 20px;
      }
    }

    &::after {
      filter: blur(1.5rem);
    }
    
    @media ${device.laptop} { 
      width: 200px;
      height: 170px;
      margin: 8px;
      border-radius: 15px;
    }

    @keyframes spin {
      from {
        --angle: 0deg;
      }
      to {
        --angle: 360deg;
      }
    }
`;