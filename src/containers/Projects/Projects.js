import React, { Component } from 'react';
//Using React-zoom to zoom image
import ImageZoom from 'react-medium-image-zoom'
import {Container, Relative, Flex} from '../../theme/grid';
import { A } from '../../theme/types';
import {
  ImageSmall, Index, ImageContainer, Title
} from './Projects.style';
import ParallaxImage from 'react-image-parallax2';


class Projects extends Component {
  render() {
    return (
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
    );
  }
}

export default Projects;
