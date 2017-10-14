/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {Container} from '../../theme/grid';;
import {
  Image,
  AvatarImage,
  RevealP
} from './Home.style';


export default class Home extends Component {

  render() {
    return (
      <div>
        <Container>
          <AvatarImage>
            <h1>Vu Xuan Minh</h1>
            <h2>Engineer. Maker. Data lover</h2>
          </AvatarImage>

          <RevealP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas ultricies porttitor est, sit amet eleifend sem egestas ut. Cras eget imperdiet est. Cras viverra ligula urna, eget rutrum erat lacinia nec. Praesent nec libero accumsan turpis molestie dapibus. Mauris scelerisque ligula sed felis ultricies, ut efficitur orci dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque finibus sapien quis convallis. Donec at interdum mi. Sed finibus sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia. Integer commodo blandit quam, ut blandit quam pretium eget.
          </RevealP>
        </Container>
      </div>
    );
  }
}
