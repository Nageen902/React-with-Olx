import React from 'react';
import  {Link} from "react-router-dom";
import {Navbar} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';
import {FormControl} from 'react-bootstrap';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import Login from "./Container/Login";






function Header() {
 
  return(

  <React.Fragment>
  <Navbar bg="light" expand="lg" className="header">
  <Navbar.Brand className="brand-name">Olx</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mr-auto">
  <Form inline>
      <FormControl type="text" placeholder="Location" value="Pakistan" className="mr-sm-2-location"></FormControl>
      <Button variant="outline-primary" className="b2"><KeyboardArrowDownIcon/></Button>
    </Form>
    <Form inline>
      <FormControl  type="text" placeholder="Find Cars Mobile Phones and more..." className="mr-sm-2-search"></FormControl>
      <Button variant="outline-primary" className="b1">Search</Button>
    </Form>
    <div className="action flex aic">
 
    <Button variant="dark" className="Login" onClick="Login"><Link path="/Login" className ="s15 font">Login</Link></Button>
 
    <Button variant="primary" className="Sell">Sell +</Button>
   
          </div>
  </Nav>
  </Navbar.Collapse>
  </Navbar>
  </React.Fragment>
    
  );
}

export default Header;