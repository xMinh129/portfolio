import styled, {css} from 'styled-components';

export const Image = styled.img`
  width: 100%;
`;

// Styling for Avatar Image
export const AvatarImage = styled.div`
  height: 100vh;
  background-image: url('${require('../../assets/source.gif')}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-size: 2em;
  h1 {
    margin-bottom: 0;
  }
`;

// Hiding and Revealing p tag

export const RevealP = styled.p`
  position: relative;
  &:after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) => hide && css`
    &:after {
      transform: rotateY(0deg);
    }
  `}
`;

export const BRFixDiv = styled.div`
  display: block;
  position: relative;
`;

export const BRExternalLink = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  right: 5vw;
  width: 75px;
  height: 33px;
  cursor: pointer;
`;

export const RightLinkP = styled.p`
  font-size: 0.7em;
  position: absolute;
  top: -10px;
  margin: 0;
  right: 50%;
  white-space: nowrap;
  color: rgba(242, 95, 92, 1);
  -webkit-transition: .5s opacity, .5s -webkit-transform;
  -webkit-transition: .5s opacity, .5s transform;
  transition: .5s opacity, .5s transform;
  display: block;
  line-height: 1.1em;
`;

export const BLExternalLink = styled.div`
  display: inline-block;
  position: fixed;
  bottom: 20px;
  width: 75px;
  height: 33px;
  left: 5vw;
  cursor: pointer;
  -webkit-transition: opacity 1s;
  transition: opacity 1s;
`;

export const LeftLinkP = styled.p`
  font-size: 0.7em;
  position: absolute;
  top: -10px;
  margin: 0;
  left: 50%;
  white-space: nowrap;
  color: rgba(242, 95, 92, 1);
  -webkit-transition: .5s opacity, .5s -webkit-transform;
  -webkit-transition: .5s opacity, .5s transform;
  transition: .5s opacity, .5s transform;
`;

export const BLFixDiv = styled.div`
  display: block;
  position: relative;
`;
