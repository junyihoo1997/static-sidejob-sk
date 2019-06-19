import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'react-bootstrap/Image'
import MalaysiaFlag from '../Pictures/MalaysiaFlag.png'
import Location from '../Pictures/location.png'
import Contact from '../Pictures/Contact.png'
import Login from '../Pictures/Login.PNG'
import Wishlist from '../Pictures/Wishlist.png'
import VerticalLine from '../Pictures/VerticalLine.png'
import Search from '../Pictures/Search2.png';

class Navbar1 extends Component {
  constructor(props){
    super(props)
    this.state = {
     Country : "Kuala Lumpur",     
    }
  }
  render(){
      return (
            <Navbar className="ForBold navHR" bg="none" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Navbar bg="none" className="NavBRD">
                <Navbar.Brand href="#home"><Image src={MalaysiaFlag} className="Flag"/> </Navbar.Brand>
              </Navbar>
                <NavDropdown title="Kuala Lumpur" id="basic-nav-dropdown" className="DropdownlistStyling">
                  <Nav.Link href="#Stores">Stores</Nav.Link>  
                    <NavDropdown.Item  href="#Kuala Lumpur" id="Malaysia" value= "Kuala Lumpur">{<div><img className="Flag2" src={MalaysiaFlag} alt="KLFlag"/> {'Kuala Lumpur'}</div>} </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#Stores" > <Image src={VerticalLine} className="Location"/><Image src={Location} className="Location2"/>Stores</Nav.Link>  
                  </Nav>
                <Form inline>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#Contact"><Image src={VerticalLine} className="Location"/>
                <Image src={Contact} className="Contact"/>Contact</Nav.Link>  
                  <Nav.Link href="#Login"><Image src={VerticalLine} className="Location"/>
                  <Image src={Login} className="Login"/>Login</Nav.Link>
                  <Nav.Link href="#Wish List"> <Image src={VerticalLine} className="Location"/>
                  <Image src={Wishlist} className="Wishlist"/>  Wish List</Nav.Link>  
                  <Nav.Link href="#NewIn" className="NavHidden" >New In</Nav.Link> 
                  <Nav.Link href="#Collecion" className="NavHidden">Collections</Nav.Link>
                  <Nav.Link href="#Wedding" className="NavHidden">Wedding</Nav.Link>
                  <Nav.Link href="#Membership" className="NavHidden">Membership</Nav.Link>
                  <Nav.Link href="#Search" className="NavHidden"><img alt="Search Logo" src={Search} id="SearchIMG"/></Nav.Link>
                  </Nav>
                  </Navbar.Collapse>
                </Form>
              </Navbar.Collapse>
            </Navbar>
      );
    }
  }
  export default Navbar1;



