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
    transform: translateY(90%) skewX(25deg) translateX(-40%);
    font-size: 48px;


  }

  .link-right{
    transition: .5s opacity, .5s transform;
    transition-property: opacity, transform;
    transition-duration: 0.5s, 0.5s;
    transition-timing-function: initial, initial;
    transition-delay: initial, initial
  }

  .link-right:hover{
    transform: translateX(50%);
  }

  .link-left{

    transform: rotateY(180deg);
  }

  .link-left:hover{
    transition: .5s opacity, .5s transform;
    transition-property: opacity, transform;
    transition-duration: 0.5s, 0.5s;
    transition-timing-function: initial, initial;

    transform: rotateY(180deg) translateX(50%);
  }

  .follow{
    margin: 0 10px 0 0;
    padding: 0 20px 0 0;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    line-height: 1.1em;
    font-size: 1.2em;
  }

  .social-icon{
    margin: 0 5px 0 0;
    padding: 5px 0 0 0;
    display: block;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    line-height: 1.1em;
    font-size: 1.0em;
  }
  
  .social-i{
    transform: rotate(90deg);
    margin: 0 15px;
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }

  .social-i:hover{
    color: ${red};
  }


`
