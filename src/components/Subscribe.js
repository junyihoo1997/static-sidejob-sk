import React, {Component} from 'react';
import Instagram from '../Pictures/Instagramlogo.png';
import Facebook from '../Pictures/Facebook.png';
import Twitter from '../Pictures/Twitter.png';
import Pinterest from '../Pictures/Pinterest.png';
import Youtube from '../Pictures/Youtube.png';
import WOW from'wowjs'; //wow js to build the slideinleft animation for icons


  class Subscribe extends Component {
    componentDidMount(){
      new WOW.WOW().init();
    }
    render(){
      return (
          <div id="InstagramDesc">
              <h4>FOLLOW US &amp; SUBSCRIBE</h4>
              <p className="FontColorStyle">Be the first to hear about new arrivals, special promotions and latest news.</p>
               {/*Slide icons using animated css and wow js  */}
             <div className="Testing">
              <section className="wow slideInLeft" data-wow-iteration="1" data-wow-offet="80" data-wow-delay=".5s">
              <img alt="Facebook Logo" src={Facebook}  id="fb" />
              <img alt="Twitter Logo" src={Twitter} id="twitter"/>   
              <img alt="Pinterest Logo" src={Pinterest} id="pinterest"/>  
              <img alt="Instagram Logo" src={Instagram} id="ig"/>     
              <img alt="Youtube Logo" src={Youtube} id="youtube"/>   
              </section>
              <br/>
              </div>
              <div>         
                    {/* For the input text and aubscribe button */}
                <input className="inputText" placeholder="Enter your email address"/>
                <button type="button" className="btn3" >SUBSCRIBE</button>
                <br/>
                <br/>
              </div>
          </div>
      );
    }
  }

export default Subscribe;