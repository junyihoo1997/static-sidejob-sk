import React, {Component} from 'react';
import Earing2 from '../Pictures/Earing2.jpg';
import Image from 'react-bootstrap/Image'


  class PictureWithFlex extends Component {
    render(){
      return (
        
        <div className="container2">
        <div className="card">
        <div className="row no-gutters StylingBody">
           
            <div className="col">
                <div className="card-block px-3">
                    <h1 className="card-title">EARING</h1>
                    <h5 className="card-text">SHOP NOW</h5>
                </div>
            </div>
            <div className="col-sm-8 Stylingbody2">
                <Image src={Earing2} fluid id="RingIMG" />
            </div>
        </div>

  </div>
  </div>
      );
    }
  }
export default PictureWithFlex;