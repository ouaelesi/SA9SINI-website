import react, { Component, useState } from "react"
//import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, NavLink  } from 'reactstrap';

  const  Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/"><img src='/assets/imgs/logo.png'  width="150"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="navitem">
                <NavLink >HOME</NavLink>
              </NavItem>
              <NavItem className="navitem">
                <NavLink>QUESTIONS</NavLink>
              </NavItem>
              <NavItem className="navitem">
                  <NavLink >ABOUT</NavLink>
              </NavItem >
              <NavItem className="navitem">
                  <NavLink>CONTACT</NavLink>
              </NavItem>
            </Nav>
          <Button className="signbutton login">LOG IN</Button>
          <Button className="signbutton signup">SIGN UP</Button>
          </Collapse>
        
        </Navbar>
      </div>
    );
  }
  
  export default Header;