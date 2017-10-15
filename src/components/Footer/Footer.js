import React, { Component, PropTypes } from 'react';
import { FooterDiv, FooterBar} from './Footer.style';

export default class Footer extends Component {
  render() {
    return(
      <FooterBar>
        <FooterDiv>
          <span className="footer">Powered by React JS</span>
          <br></br>
          <span className="footer">Credit to <a className="footer-link" target="_blank" href="https://github.com/chuson1996">chuhoangson</a> for his awesome libraries</span>
        </FooterDiv>
      </FooterBar>
    );
  }
};
