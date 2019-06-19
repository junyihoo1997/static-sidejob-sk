import React, { Component } from 'react';
import './App.css';
import Navbar1 from'./components/Navbar';
import Navbar2 from'./components/Navbar2';
import logo from './Pictures/dummy+logo.jpg';
import InstaLogo from './Pictures/Instagramlogo.png';
import SlideShow from './components/ImageContent';
import PictureWithFlex from './components/ImageContent2';
import CardsObject from './components/CardsObject';
import Instagram from './components/InstagramPhotosDisplay';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';


class App extends Component {
  render(){
    return (
      <div id="Margin container-fluid">
        <Navbar1 />
        <hr className="HorizontalHide"/>
        <img src = {logo} id="img" alt="Dummy"/>
        <Navbar2 />
        <SlideShow/>
        <br/>
        <hr/>
        <br/>
        <PictureWithFlex/>
        <br/>
        <br/>
        <br/>
        <CardsObject />
        <br/>
        <br/>
        <br/>
        <img src = {InstaLogo} id="img2" alt="Instagram"/>
        <br/>
        <Instagram/>
        <br/>
        <br/>
        <br/>
        <Subscribe/>
        <br/>
        <br/>
        <br/>
        <Footer /> 
      </div>
    );
  }
}

export default App;