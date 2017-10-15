/* eslint-disable */
import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import {Container} from '../../theme/grid';
import { Link } from 'react-router';
import {
  Image,
  AvatarImage,
  RevealP, RightLinkP, BRExternalLink, BRFixDiv
} from './Home.style';
import WhenInView from '../../components/WhenInView/WhenInView';



export default class Home extends Component {


  render() {
    return (
      <div>
        <Container>
          <AvatarImage>
            <h1>Vu Xuan Minh</h1>
            <h2>Engineer. Maker. Data lover</h2>
          </AvatarImage>

          <WhenInView>
            {
              ({isInView}) =>
                <RevealP hide={!isInView}>
                  My name is Minh. At a younger age, I always thought that I would never get a career in science or technology. I scored badly for Maths and programming. But as I grew up, the passion for coding grew along with me, and naturally, I fell in love with it. In 2014, I was given an internship opportunity at a fast-growing EdTech startup. Seeing the tools that I built impacted the lives of many students was perhaps, the biggest validation, reminding me of why I'm doing what I'm doing.
                </RevealP>
            }
          </WhenInView>

          <WhenInView>
            {
              ({isInView}) =>
                <RevealP hide={!isInView}>
                  A year ago, my dad was diagnosed with cancer. This life turning point motivated me to dive deeper into technology and learn new concepts such as big data, machine learning and their medical application  in order to understand my father's condition and how technology could give patients like him a better chance. I dream that one day, I will open my own programming education in Vietnam to enable the next generation of technology lovers.
                </RevealP>
            }
          </WhenInView>

          <WhenInView>
            {
              ({isInView}) =>
                <RevealP hide={!isInView}>
                   My focus and knowledge is on Ruby on Rails, React JS and Python, with basic knowledge of C and Go. However, I'm open to learn and experience new tech stack and better practices from amazing developers out there.<br></br> You can read more about me or my past/current projects
                </RevealP>
            }
          </WhenInView>

          <BRExternalLink>
             <BRFixDiv>
              <Link to='/projects'>
                <span className="link-title">
                  <RightLinkP>My Projects</RightLinkP>
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
        </Container>
      </div>
    );
  }
}
