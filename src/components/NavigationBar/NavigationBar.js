
import React, { Component } from 'react';
import { NavigationContainer, NavItem } from './NavigationBar.style';

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/aboutMe">About Me</NavItem>
        <NavItem to="/myResume">Resume</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;
