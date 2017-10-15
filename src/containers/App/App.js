import React, { Component } from 'react';
import { Background } from './App.style';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import SocialLink from '../../components/SocialMedia/SocialMedia';
import Footer from '../../components/Footer/Footer';
import ReallySmoothScroll from 'really-smooth-scroll';
import {hashHistory} from 'react-router';

hashHistory.listen(() => {
    window.scrollTo(0, 0);
  }
)

ReallySmoothScroll.shim();
class App extends Component {
  render() {
    return (
      <div>
        <Footer/>
        <Background/>
        <NavigationBar/>
        <SocialLink/>

        {this.props.children}
      </div>
    );
  }
}

export default App;
