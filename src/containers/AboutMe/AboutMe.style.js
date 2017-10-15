import styled from 'styled-components';
import { red, yellow } from '../../theme/variables';
import { Relative } from '../../theme/grid';
import PlayButton from '../../components/PlayButton/PlayButton'


export const Title = styled.h1`
  margin-top: 0;
  color: ${red};
`;

export const VideoContainer = styled(Relative)`
  width: 70%;
  flex-shrink: 0;
  flex-grow: 0;
  cursor: pointer;
`;

export const StyledPlayButton = styled(PlayButton)`
  position: absolute;
  left: 50%;
  top: 45%;
  transition: opacity 0.3s;
  transform: translate(-50% -50%);
  ${({ playing }) => playing && `
    opacity: 0;
  ` }
`;

 export const HighlightSpan =styled.p`
   display: inline;
   color: ${yellow};
   font-size: 1em;
 `;

 export const MusicPlayer = styled.div`
   margin-right: 20px;
 `;
