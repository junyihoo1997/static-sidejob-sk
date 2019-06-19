import React, {Component} from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'


  class Footer extends Component {
    render(){
      return (
          <footer className="footer text-center" id="message">
          <div className="container-fluid">
    <Row >
    <Col> 
    <div>
      {/* Using text align left and align content center to make it */}  
            <Nav defaultActiveKey="/home" className="flex-column FooterNavAlign">
            <h3 className="white1" >About Us</h3>
            <br/>
              <Nav.Link href="#Newletter" eventKey="link-1" className="FooterNavColor ">Newletter</Nav.Link>
              <Nav.Link href="#FAQ" eventKey="link-2" className="FooterNavColor ">FAQ</Nav.Link>
              <Nav.Link href="#Stores" eventKey="link-3" className="FooterNavColor ">Stores</Nav.Link>   
              <Nav.Link href="#Contact Us" eventKey="link-4" className="FooterNavColor ">Contact Us</Nav.Link>              
            </Nav>
          </div>
          </Col>
    <Col>   
    <div>      
            <Nav defaultActiveKey="/home" className="flex-column FooterNavAlign1">
            <h3 className="white ">Legal</h3>
            <br/> 
              <Nav.Link href="#Terms Of Use" eventKey="link-1" className="FooterNavColor ">Terms Of Use</Nav.Link>
              <Nav.Link href="#TermAndCondition" eventKey="link-2" className="FooterNavColor ">Terms &amp; Conditions</Nav.Link>
              <Nav.Link href="#PrivacyPolicy" eventKey="link-3" className="FooterNavColor ">Privacy Policy</Nav.Link>
              <Nav.Link href="#CookieConsent" eventKey="link-4" className="FooterNavColor ">Cookie Consent</Nav.Link>                 
            </Nav>
          </div></Col>
    <Col>          
    <div>
            <Nav defaultActiveKey="/home" className="flex-column FooterNavAlign2">
            <h3 className="white2">Corporate</h3>
            <br/>
              <Nav.Link href="#Career" eventKey="link-1" className="FooterNavColor ">Career</Nav.Link>
              <Nav.Link href="#GemstonesForProfessionals" eventKey="link-2" className="FooterNavColor ">Gemstones For Professionals</Nav.Link>
              <Nav.Link href="#Newsroom" eventKey="link-3" className="FooterNavColor ">Newsroom</Nav.Link>   
              <Nav.Link href="#CorporateSales" eventKey="link-4" className="FooterNavColor ">Corporate Sales</Nav.Link>              
            </Nav>
          </div>
          </Col>
  </Row>
        </div>
        
      </footer>
      );
    }
  }

export default Footer;