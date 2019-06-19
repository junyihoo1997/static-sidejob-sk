import React, {Component} from 'react';
import Bracelets from '../Pictures/bracelets2.jpg';
import Rings from '../Pictures/Ring5.jpg';
import Watches from '../Pictures/watch2.jpg';
import Accessories from '../Pictures/accessories2.jpg';
import Card from 'react-bootstrap/Card'


  class CardsObject extends Component {
    render(){
      return (
        // Bracelets card
        <div className="container4">
          {/* container-fluid can be used but the image is too big */}
        <div className="MarginCard ">  
        <div className="row">
          <div className="col-xl CardIMGWidth">
          <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Bracelets} />
        <Card.Body className="TittleBackground">
          <Card.Title>BRACELETS</Card.Title>       
        </Card.Body>
        </Card>      
        {/* Rings card */}
          </div>
          <div className="col-xl CardIMGWidth">
          <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Rings}  />
        <Card.Body className="TittleBackground">
        <Card.Title>RINGS</Card.Title>       
        </Card.Body>
        </Card>    
        {/* Watches card */}
          </div>
          <div className="col-xl CardIMGWidth">
        <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Watches} />
        <Card.Body className="TittleBackground">
        <Card.Title >WATCHES</Card.Title>      
        </Card.Body>
        </Card>    
        {/* accesories cards */}
          </div>
          <div className="col-xl CardIMGWidth">
          <Card style={{ width: '100%' }}>
        <Card.Img variant="top" src={Accessories}/>
        <Card.Body className="TittleBackground">
        <Card.Title >ACCESSORIES</Card.Title>  
        </Card.Body>
        </Card>    
          </div>
        </div>
        </div> 
        </div>
      );
    }
  }

export default CardsObject;
