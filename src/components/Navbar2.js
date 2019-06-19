import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Search from '../Pictures/Search2.png';

class Navbar2 extends Component {
    render(){
      return (
        <Navbar className="container" bg="none" expand="lg">
        <div className="col-4"></div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="Nav2Hidden"/>
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="mr-auto" >
            <Nav.Link href="#NewIn" >NEW IN</Nav.Link>
            <Nav.Link href="#Collecion">COLLECTIONS</Nav.Link>
            <Nav.Link href="#Wedding">WEDDING</Nav.Link>
            <Nav.Link href="#Membership">MEMBERSHIP</Nav.Link>
            <Nav.Link href="#Search"><img alt="Search Logo" src={Search} id="SearchIMG"/></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      <div className="col-3"></div>
      </Navbar>
        );
      }
    }
export default Navbar2;