import React, { Component } from 'react';
import { Container, Flex } from '../../theme/grid';
import { Title, VideoContainer, StyledPlayButton } from './AboutMe.style';
import ReactPlayer from 'react-player';
import { H2, P, Span } from '../../theme/types';


class AboutMe extends Component {
  constructor(props){

    super(props);

    this.state = {
      videoHovering: false,
      videoPlaying: false
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onMouseOver() {
    this.setState({
      videoHovering: true
    });
  }

  onMouseLeave(){
    this.setState({
      videoHovering: false
    });
  }

  onVideoClick (){

    if (this.state.videoPlaying){
      this.setState({
        videoPlaying: false
      });
    }
    else {
      this.setState({
        videoPlaying: true
      });
    }
  }


  render() {

    return (
      <Container>
        <Title>About Me</Title>
        <P align="left">
          <Span align="right">
            Hi there!
          </Span>
        </P>

        <P align="left">
          <Span align="right">
            You are going to find out a bit about me and what I do when I'm not on the computer
          </Span>
        </P>

        <H2 align="right" color="#247ba0">Whaa? Do you play sport? Hell yeah I do.</H2>
        <Flex>
          <P align="right" font-size="24px" >I love Basketball because it teaches me strength, endurance, team work. Check out this crazy basketball montage. </P>
          <VideoContainer
            onMouseLeave={this.onMouseLeave}
            onMouseOver={this.onMouseOver}
            onClick={this.onVideoClick}

          >
            <StyledPlayButton playing={this.state.videoPlaying} hover={this.state.videoHovering}/>
            <ReactPlayer
              loop
              height='auto'
              playing={this.state.videoPlaying}
              width="100%"
              url={require('../../assets/basketball.mp4')}/>
          </VideoContainer>
        </Flex>

        <P align="right">
          <Span align="right" color="#247ba0">
            Yeah. Tell me more...
          </Span>
        </P>




      </Container>
    );
  }
}
export default AboutMe;
