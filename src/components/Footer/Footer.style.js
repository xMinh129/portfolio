import styled from 'styled-components';
import { grey } from '../../theme/variables';

export const FooterBar = styled.div`

  color: ${grey};
  position: fixed;
  bottom: 60px;
  right: -15%;

`;

export const FooterDiv = styled.div`

  color: ${grey};
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  font-size: 0.7em;
  -webkit-transition: color .3s;
  transition: color .3s;
  z-index: 99;
  -webkit-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotate(-90deg);
  -webkit-transform-origin: left top;
  -ms-transform-origin: left top;
  transform-origin: left top;
  display: flex;
  bottom: 0px;
  display: -webkit-flex;
   display: flex;
   -webkit-flex-direction: column;
   flex-direction: column;
   -webkit-align-items: flex-end;
   align-items: flex-end;

`;
