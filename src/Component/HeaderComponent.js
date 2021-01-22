import react, { Component, useState } from "react"
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
  } from 'reactstrap';

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
                <NavLink href="/components/">HOME</NavLink>
              </NavItem>
              <NavItem className="navitem">
                <NavLink href="https://github.com/reactstrap/reactstrap">QUESTIONS</NavLink>
              </NavItem>
              <NavItem className="navitem">
                  <NavLink href="https://github.com/reactstrap/reactstrap">ABOUT</NavLink>
              </NavItem >
              <NavItem className="navitem">
                  <NavLink href="https://github.com/reactstrap/reactstrap">CONTACT</NavLink>
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