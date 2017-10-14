
import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutMe">About Me</NavItem>
        <NavItem to=""><a href="https://standardresume.co/minhvu">Resume</a></NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
