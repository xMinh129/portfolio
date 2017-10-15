import React, { Component } from 'react';
//Using React-zoom to zoom image
import ImageZoom from 'react-medium-image-zoom'
import {Container, Relative, Flex} from '../../theme/grid';
import { A } from '../../theme/types';
import {
  ImageSmall, Index, ImageContainer, Title
} from './Projects.style';
import {RightLinkP, BRExternalLink, BRFixDiv, LeftLinkP, BLExternalLink, BLFixDiv} from '../Home/Home.style';
import { Link } from 'react-router';
import ParallaxImage from 'react-image-parallax2';


class Projects extends Component {
  render() {
    return (
      <div>
        <Container >
          <Title>Projects</Title>
          <Container>
            <Relative arginTop="100px" marginBottom="50px">
              <Index>
                <h1>01</h1>
              </Index>
              <h1>blended learning platform <A href="">@ Everest Education</A></h1>
            </Relative>
            </Container>
          <Flex justify={'center'} marginBottom="5em">
            <ImageSmall>
              <ImageZoom
                image={{
                  src: 'https://rpearce.github.io/react-medium-image-zoom/bridge.jpg',
                  alt: 'Golden Gate Bridge',
                  className: 'img',
                  style: { width: '20em' }
                }}
                zoomImage={{
                  src: 'https://rpearce.github.io/react-medium-image-zoom/bridge.jpg',
                  alt: 'Golden Gate Bridge'
                }}
              />
            </ImageSmall>
          </Flex>

          <Container>
            <Relative marginBottom="50px">
              <Index float='right'>
                <h1>02</h1>
              </Index>
              <h1 className="right">blended learning platform <A href="">@ Everest Education</A></h1>
            </Relative>
          </Container>

          <Flex justify='center'>
            <ImageSmall>
              <ImageContainer>
                <ParallaxImage
                  reduceHeight={1/3}
                  src={'https://rpearce.github.io/react-medium-image-zoom/bridge.jpg'}/>
              </ImageContainer>
            </ImageSmall>
          </Flex>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </Container>

        <BLExternalLink>
           <BLFixDiv>
            <Link to='/'>
              <span className="link-title">
                <LeftLinkP>Home</LeftLinkP>
              </span>
              <span>
              <svg className="link-left" height="33px" width="75px" viewBox="-2 -2 110 48">
              	<path id="Line" d="M0,22 L104.5,22" fill="none" stroke="rgba(242, 95, 92, 1)" strokeLinecap="round" strokeWidth="4"/>
              	<path d="M105.299988,22 L84.4340455,0.181462389" fill="none" stroke="rgba(242, 95, 92, 1)" strokeLinecap="round" strokeWidth="4"/>
              	<path d="M105.299988,43.7852408 L84.4340458,21.9667036" fill="none" stroke="rgba(242, 95, 92, 1)" strokeLinecap="round" strokeWidth="4" transform="translate(94.867017, 32.875972) scale(1, -1) translate(-94.867017, -32.875972) "/>
              </svg>
              </span>
            </Link>
           </BLFixDiv>
        </BLExternalLink>

        <BRExternalLink>
           <BRFixDiv>
            <Link to='/AboutMe'>
              <span className="link-title">
                <RightLinkP>More about me</RightLinkP>
              </span>
              <span>
                <svg className='link-right' width='75' height='33' viewBox='-2 -2 110 48'>
                    <path d='M0,22 L104.5,22' id='Line' stroke='rgba(242, 95, 92, 1)' strokeWidth='4'
                    strokeLinecap='round' strokeLinejoin='round' fill='none' />
                    <path d='M105.299988,22 L84.4340455,0.181462389' stroke='rgba(242, 95, 92, 1)'
                    strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' fill='none'
                    />
                    <path d='M105.299988,43.7852408 L84.4340458,21.9667036' stroke='rgba(242, 95, 92, 1)'
                    strokeWidth='4' strokeLinecap='round' strokeLinejoin='round' fill='none'
                    transform='matrix(1 0 0 -1 0 65.752)' />
                  </svg>
              </span>
            </Link>
           </BRFixDiv>
        </BRExternalLink>

      </div>
    );
  }
}

export default Projects;
