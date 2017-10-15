import { injectGlobal } from 'styled-components';
import {black, blue, red, yellow} from '../theme/variables';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=VT323');

  body {
    font-family: 'VT323', monospace;
    font-size: 24px;
  }

  h1, h2, h3 {
  font-weight: normal;
  ${({ color }) => color && `
    color: ${color};
  `}
  }

  a {
    color: ${blue};
    text-decoration: none;
  }

  p {
    font-size: 32px;
  }

  .blink{
    -webkit-animation-name: blink;
     -moz-animation-name: blink;
       -o-animation-name: blink;
          animation-name: blink;
  -webktit-animation-timing-function: linear;
      -moz-animation-timing-function: linear;
        -o-animation-timing-function: linear;
           animation-timing-function: linear;
  -webkit-animation-duration: 2s;
     -moz-animation-duration: 2s;
       -o-animation-duration: 2s;
          animation-duration: 2s;
          -webkit-animation-iteration-count: infinite;
     -moz-animation-iteration-count: infinite;
       -o-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  }


  @-webkit-keyframes blink {
    50% {
      opacity: 0;
    }
  }
  @-moz-keyframes blink {
    50% {
      opacity: 0;
    }
  }
  @-o-keyframes blink {
    50% {
      opacity: 0;
    }
  }
  @keyframes blink {
    50% {
      opacity: 0;
    }
  }

  .command{

  }
  .handicon{
    position:relative;
    transform: translateY(-80%) skewX(25deg);;
    font-size: 48px;


  }

`
