import styled from 'styled-components';
import { blue } from '../../theme/variables';
import media from '../../theme/media';

export const SocialBar = styled.div`
  position: fixed;
  bottom: 60px;
  left: 40px;
  font-size: 24px;
`;

export const SocialDiv = styled.div`
  color: rgba(36, 123, 160, 1);
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
  
`;
