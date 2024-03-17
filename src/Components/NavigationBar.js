import React from 'react';
import { Navbar, Container, Nav } from "react-bootstrap"
import { Link } from 'react-router-dom'; // Import Link from react-router-dom untuk navigasi di dalam aplikasi


const NavigationBar = () => {
  return (
    <div>
      <Navbar className="my-navbar">
        <Container>
          <Navbar.Brand>SDAL</Navbar.Brand>
          <Nav>
            <Nav.Link as={Link} to="/team-profile">Team Profile</Nav.Link> 
            <Nav.Link as={Link} to="/deskripsi-alat">Deskripsi Alat</Nav.Link>
            <Nav.Link as={Link} to="/monitoring-alat">Data Monitoring</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavigationBar