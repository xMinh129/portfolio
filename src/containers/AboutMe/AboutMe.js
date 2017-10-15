import React, { Component } from 'react';
import { Container, Flex, Relative } from '../../theme/grid';
import ImageZoom from 'react-medium-image-zoom'
import { Title, VideoContainer, StyledPlayButton, HighlightSpan , MusicPlayer} from './AboutMe.style';
import {
  ImageSmall, Index, ImageContainer
} from '../Projects/Projects.style';
import ReactPlayer from 'react-player';
import { H2, P, Span } from '../../theme/types';
import WhenInView from '../../components/WhenInView/WhenInView';
import {
  RevealP
} from '../Home/Home.style';




class AboutMe extends Component {
  constructor(props){

    super(props);

    this.state = {
      videoHovering: false,
      videoPlaying: false,
      revealMusic: false,
      revealImg1: false,
      revealImg2: false,
      revealImg3: false,
      revealSport: false,
    };

    this.onMouseOver = this.onMouseOver.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onVideoClick = this.onVideoClick.bind(this);
    this.revealMusic = this.revealMusic.bind(this);
    this.revealSport = this.revealSport.bind(this);
    this.revealImg1 = this.revealImg1.bind(this);
    this.revealImg2 = this.revealImg2.bind(this);
    this.revealImg3 = this.revealImg3.bind(this);
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

  revealMusic(){
    this.setState({
      revealMusic: true
    });
  }

  revealImg1(){
    this.setState({
      revealImg1: true
    });
  }

  revealImg2(){
    this.setState({
      revealImg2: true
    });
  }

  revealImg3(){
    this.setState({
      revealImg3: true
    });
  }

  revealSport(){
    this.setState({
      revealSport: true
    });
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

        <P align="right">
          <Span align="right" color="#247ba0" onClick={this.revealMusic}>
          <p className="command">So yes Minh, what do you do in your free time?</p>
          {!this.state.revealMusic &&
            <i className="fa fa-hand-pointer-o blink handicon" aria-hidden="true"></i>
          }
          </Span>
        </P>

        {this.state.revealMusic &&
          <div>
            <P align="left">
              <Span align="right">
                I listen to music a lot, like a lot. Here are my three favorite songs currently. Enjoy!
              </Span>
            </P>
            <Container>
              <Flex flexdirection="row">
                <MusicPlayer><iframe src="https://open.spotify.com/embed/track/6zu1OTADnl6VLYV8h3vqxH" width="300" height="380" frameborder="0" allowtransparency="true" autoplay="false"></iframe></MusicPlayer>
                <MusicPlayer><iframe src="https://open.spotify.com/embed/track/7h4r9W7RDCIgOMenwrDFVq" width="300" height="380" frameborder="0" allowtransparency="true" autoplay="false"></iframe></MusicPlayer>
                <MusicPlayer><iframe src="https://open.spotify.com/embed/track/5M9jOReAKGZ2AttVefFjTY" width="300" height="380" frameborder="0" allowtransparency="true" autoplay="false"></iframe></MusicPlayer>
              </Flex>
            </Container>

            <H2 align="right" color="#247ba0" onClick={this.revealSport}>
            <p>Whaa? Do you play sport? Hell yeah I do.</p>
            {!this.state.revealSport &&
              <i className="fa fa-hand-pointer-o blink handicon" aria-hidden="true"></i>
            }
            </H2>
          </div>
        }





        {this.state.revealSport &&
          <div>
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
                <Span align="right" color="#247ba0" onClick={this.revealImg1}>
                  <p>Yeah. Tell me more...</p>
                  {!this.state.revealImg1 &&
                    <i className="fa fa-hand-pointer-o blink handicon" aria-hidden="true"></i>
                  }
                </Span>
              </P>
          </div>
        }


        {this.state.revealImg1 &&
          <div>
            <P align="center">
              <Span align="center">
                I also like to read about entrepreneurship and watch Shark Tank. <br></br>Guess who my favorite shark is. <br></br>Hint: Basketball + tech :D
              </Span>
            </P>

            <WhenInView>
              {
                ({isInView}) =>
                  <RevealP hide={!isInView}>
                  <Container>
                      <Relative marginBottom="50px">

                        <h1 className="right">Yes it's Mr. <HighlightSpan> Mark Cuban </HighlightSpan></h1>
                      </Relative>
                      <Flex justify={'center'}>
                        <ImageSmall>
                          <ImageZoom
                            image={{
                              src: 'https://preview.ibb.co/mAvSLb/mark_cuban.jpg',
                              alt: 'Mark Cuban',
                              className: 'img',
                              style: { width: '20em' }
                            }}
                            zoomImage={{
                              src: 'https://preview.ibb.co/mAvSLb/mark_cuban.jpg',
                              alt: 'Mark Cuban'
                            }}
                          />
                        </ImageSmall>
                      </Flex>
                    </Container>

                    <P align="left">
                      <Span align="left">
                        The two quotes from Mr. Cuban that I love most are <P color="red">"Don't start a company unless it's an obsession and something you love. If you have an exit strategy, it's not an obsession."</P> and <P color="red">"Work like there is someone working 24 hours a day to take it all away from you."</P>
                      </Span>
                    </P>

                    <P align="right">
                      <Span align="right" color="#247ba0" onClick={this.revealImg2}>
                          <p>Who else has inspired you?</p>
                          {!this.state.revealImg2 &&
                            <i className="fa fa-hand-pointer-o blink handicon" aria-hidden="true"></i>
                          }
                      </Span>
                    </P>
                  </RevealP>
              }
            </WhenInView>
          </div>
        }

        {this.state.revealImg2 &&
          <div>
            <Container>
              <Relative marginBottom="50px">

                <h1 className="right">Dr. <HighlightSpan>Nguyen Ba Hai </HighlightSpan></h1>
              </Relative>
              <Flex justify={'center'}>
                <ImageSmall>
                  <ImageZoom
                    image={{
                      src: 'https://preview.ibb.co/gXqGDw/dr_hai.jpg',
                      alt: 'Dr.Hai',
                      className: 'img',
                      style: { width: '20em' }
                    }}
                    zoomImage={{
                      src: 'https://preview.ibb.co/gXqGDw/dr_hai.jpg',
                      alt: 'Dr. Hai'
                    }}
                  />
                </ImageSmall>
              </Flex>
            </Container>

            <P align="left">
              <Span align="left">
                Dr. Hai turned down great job offers from top companies to return to Vietnam and inspire the next generation of young Vietnamese scientific talents. He is working on exciting projects like Haptic Technology for the blind, Javi Coffee, Robotics and many others. Working with his makers team is one of the best experience I've ever had.
              </Span>
            </P>

            <P align="right">
              <Span align="right" color="#247ba0" onClick={this.revealImg3}>
                  <p>And last but not least...</p>
                  {!this.state.revealImg3 &&
                    <i className="fa fa-hand-pointer-o blink handicon" aria-hidden="true"></i>
                  }
              </Span>
            </P>
          </div>
        }

        {this.state.revealImg3 &&
          <div>
            <Container>
              <Relative marginBottom="50px">
                <h1 className="right">Google CEO <HighlightSpan>Sundar Pichai</HighlightSpan></h1>
              </Relative>
              <Flex justify={'center'}>
                <ImageSmall>
                  <ImageZoom
                    image={{
                      src: 'https://image.ibb.co/hdsrfb/google_ceo.jpg',
                      alt: 'Sundar Pichai',
                      className: 'img',
                      style: { width: '20em' }
                    }}
                    zoomImage={{
                      src: 'https://image.ibb.co/hdsrfb/google_ceo.jpg',
                      alt: 'Sundar Pichai'
                    }}
                  />
                </ImageSmall>
              </Flex>
            </Container>
            <P align="left">
              <Span align="left">
                Who thought that the current CEO of one of the biggest software companies in the world has an undergraduate degree in Materials Science and Engineering? He is someone that I admire a lot for following an unconventional path to pursue his passion of technology. I am a huge fan and avid user of Google products, including the Google App Script and Golang languages, and particularly their impacts on education with Google Classroom.
              </Span>
            </P>
          </div>
        }

      </Container>
    );
  }
}
export default AboutMe;
