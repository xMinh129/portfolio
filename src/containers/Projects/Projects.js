import React, { Component } from 'react';
//Using React-zoom to zoom image
import ImageZoom from 'react-medium-image-zoom'
import {Container, Relative, Flex} from '../../theme/grid';
import { A } from '../../theme/types';
import {
  ImageSmall, Index
} from './Projects.style';


class Projects extends Component {
  render() {
    return (
      <Container >
        <Container>
          <Relative marginBottom="80px">
            <Index>
              <h1>01</h1>
            </Index>
            <h1>blended learning platform <A href="">@ Everest Education</A></h1>
          </Relative>
          </Container>
        <Flex justify={'center'}>
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
      </Container>
    );
  }
}

export default Projects;
