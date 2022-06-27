import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    
  <Navbar.Brand href="/"><i className="fa-solid fa-volleyball" style={{marginRight:'4px'}}></i>Volleyball Score Board</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Nav>
      <Nav.Link href="/signin">Sign In</Nav.Link>
      <Nav.Link href="/register">Register</Nav.Link>
      <Nav.Link href="/scores">View Final Scores</Nav.Link>
      
    </Nav>
  </Container>
  
</Navbar>
  )
}

export default Header