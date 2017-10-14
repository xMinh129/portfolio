import styled from 'styled-components';
import { yellow } from '../../theme/variables';
import media from '../../theme/media';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require('../../assets/body-background.png')});
  opacity: 0.2;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  ${media.tablet`
    background-repeat: repeat-y;
  `}
  ${media.phone`
    background-repeat: repeat-y;
  `}
`;
