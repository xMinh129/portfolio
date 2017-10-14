import { injectGlobal } from 'styled-components';
import {black, blue} from '../theme/variables';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=VT323');

  body {
    font-family: 'VT323', monospace;
    font-size: 24px;
  }

  h1, h2, h3 {
  font-weight: normal;
  color: ${black};
  }

  a {
    color: ${blue};
    text-decoration: none;
  }

  p {
    font-size: 32px;
  }
`
