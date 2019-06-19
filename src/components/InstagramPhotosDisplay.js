import React, {Component} from 'react';
import { toggleIcon } from './InstagramIMGPullRequest';



  class Instagram extends Component {
    render(){
      toggleIcon();// function from javascript js for instagram access token and function to connect and get img
      return (
          <div id="InstagramDesc">
              <h3>SNAP &amp; SHARE</h3>
              <p className="FontColorStyle">Just tag @habib on instagram to be featured.</p>
              <br/>
              <div/>
              {/* Instagram Images from Instagram web */}
              <div className="Setwidth">
              <ul id="instafeed"></ul>
          </div>

        <div>
        <div className="row">
          <div className="col-xl CardIMGWidth">
          </div>
        </div>
        <br/>
        <button type="button" className="btn2">DISCOVER MORE</button>
        </div>
        <br/>
        <hr/>
        </div>
      );
    }
  }

export default Instagram;