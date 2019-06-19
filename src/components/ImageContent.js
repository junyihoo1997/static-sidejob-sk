import React, {Component} from 'react';
import { Fade } from 'react-slideshow-image'
import Ring from '../Pictures/Ring.jpg';
import Ring2 from '../Pictures/Ring2.jpg';
import Ring3 from '../Pictures/Ring3.jpg';
import Image from 'react-bootstrap/Image'


const fadeImages = [
  //image source
    Ring,
    Ring2,
    Ring3
  ];
  const fadeProperties = {
    //image properties
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: false
  }
  class Slideshow extends Component {
    render(){
      return (
        <Fade {...fadeProperties} >
          {/* include img to slider */}
        <div>
          <div>
          <Image src={fadeImages[0]} fluid id="RingIMG2" />
          </div>
          <br/>
          <h2>TITTLE FOR THE BANNER</h2>
          <p className="FontColorStyle">SUBTITTLE FOR THE BANNER</p>
        </div>
        <div>
          <div>
          <Image src={fadeImages[1]} fluid id="RingIMG2" />
          </div>
          <br/>
          <h2>TITTLE FOR THE BANNER 2</h2>
          <p className="FontColorStyle">SUBTITTLE FOR THE BANNER 2</p>
        </div>
        <div>
          <div>
          <Image src={fadeImages[2]} fluid id="RingIMG2" />
          </div>
          <br/>
          <h2>TITTLE FOR THE BANNER 3</h2>
          <p className="FontColorStyle">SUBTITTLE FOR THE BANNER 3</p>
        </div>     
      </Fade>
      );
    }
  }
export default Slideshow;