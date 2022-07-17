import React from 'react'
import {Container,Nav,Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
    
  <Navbar.Brand><Link to="/"><i className="fa-solid fa-volleyball" style={{marginRight:'4px'}}></i>Volleyball Score Board</Link></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  
  <Nav>
      <Nav.Link><Link to='/signin'>Sign In</Link></Nav.Link>
      <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
      <Nav.Link><Link to='/scores'>View Final Scores</Link></Nav.Link>
      <Nav.Link><Link to='/chart'>View Chart</Link></Nav.Link>
      
    </Nav>
  </Container>
  
</Navbar>
  )
}

export default Header