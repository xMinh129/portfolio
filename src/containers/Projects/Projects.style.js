import styled, { css } from 'styled-components';
import { yellow } from '../../theme/variables';


export const ImageSmall = styled.div`
  cursor: pointer;
  overflow: hidden;
  display: inline-block;
  transition: transform .3s;
  &:hover{
    & > img {
      transform: scale(1.3);
    }
  }
  ${({ justify }) => justify && css`
    justify: ${justify};
  `}
`;


export const Index = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  font-size: 3em;
  h1 {
    margin: 0;
    font-weight: bold;
    color: ${yellow};
    opacity: 0.5;
    transform: translateY(20%);

  }

`;

export const ImageContainer = styled.div`
  width: 20em;
  height: 20em;
  ${({ justify }) => justify && css`
    justify: ${justify};
  `}
`;
