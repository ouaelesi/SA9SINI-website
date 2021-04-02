import react, { Component, useState } from "react"
//import { NavLink } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody,
  Form, FormGroup, Input, Label, NavLink  } from 'reactstrap';




  const  Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
    
    function fun() { 
      
    } 
    return (
      <div>
        <Navbar className="nav_container" light expand="md">
          <NavbarBrand href="/home"><img src='/assets/imgs/logo.png' className="navlogo"/></NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto row nav" navbar>
              <NavItem className="navitem col-12 col-md-2  mx-auto">
                <NavLink href="./home" className="navlink">HOME</NavLink>
              </NavItem>
              <NavItem className="navitem col-12 col-md-2  mx-auto">
                <NavLink href="/Questions"className="navlink">QUESTIONS</NavLink>
              </NavItem>
              <NavItem className="navitem col-12 col-md-2  mx-auto">
                  <NavLink href="/aboutus" className="navlink">ABOUT</NavLink>
              </NavItem >
              <NavItem className="navitem col-12 col-md-2  mx-auto">
                  <NavLink className="navlink">CONTACT</NavLink>
              </NavItem>

              <NavItem className="navitem col-12 col-md-2  mx-auto">
              <NavLink href="/Login" className="d-flex justify-content-center">  <Button className="signbutton login " onClick={fun()}>LOG IN</Button></NavLink>
    
              </NavItem>
              <NavItem className="navitem col-12 col-md-2  mx-auto">
              <NavLink href="/signin" className=" d-flex justify-content-center">  <Button className="signbutton signup">SIGN UP</Button></NavLink>
              </NavItem>
            </Nav>
          
          </Collapse>
        
        </Navbar>
      </div>
    );
  }
  
  export default Header;