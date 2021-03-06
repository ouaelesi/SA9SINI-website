import react, { Component, useState } from "react"
//import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, NavLink  } from 'reactstrap';

  const  Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className="nav_container" light expand="md">
          <NavbarBrand href="/home"><img src='/assets/imgs/logo.png'  width="150"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto row nav" navbar>
              <NavItem className="navitem col-3">
                <NavLink href="./home">HOME</NavLink>
              </NavItem>
              <NavItem className="navitem col-3">
                <NavLink href="/Questions">QUESTIONS</NavLink>
              </NavItem>
              <NavItem className="navitem col-3">
                  <NavLink href="/aboutus" >ABOUT</NavLink>
              </NavItem >
              <NavItem className="navitem col-3">
                  <NavLink>CONTACT</NavLink>
              </NavItem>
            </Nav>
            <NavLink href="/login">  <Button className="signbutton login">LOG IN</Button></NavLink>
            <NavLink href="/login">  <Button className="signbutton signup">SIGN UP</Button></NavLink>
         
          </Collapse>
        
        </Navbar>
      </div>
    );
  }
  
  export default Header;