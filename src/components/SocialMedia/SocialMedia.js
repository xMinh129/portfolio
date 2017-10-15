import React, { Component } from 'react';
import { SocialBar, SocialDiv} from './SocialMedia.style';


class SocialLink extends Component {
  render() {
    return (
      <SocialBar>
        <SocialDiv>
          <p className="follow">Connect With Minh</p><br></br>
          <a className="social-icon" target="_blank" href="https://www.facebook.com/xuanminhvu129"><i className=" social-i fa fa-facebook"></i></a><br></br>
          <a className="social-icon" target="_blank" href="https://www.linkedin.com/in/xuan-minh-vu-b5b628103/"><i className=" social-i fa fa-linkedin"></i></a><br></br>
          <a className="social-icon" target="_blank" href="https://github.com/xuanminhacsi"><i className=" social-i fa fa-github"></i></a>
        </SocialDiv>
      </SocialBar>
    );
  }
}

export default SocialLink;
