import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, NavDropdown, Form, FormControl } from 'react-bootstrap';
import logo from '../assets/img/logo-removebg.png';

const NavBar = () => {
    // Simulated authentication state
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Navbar bg="light" expand="md">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" height="75" />Recipe Domain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home"><i className="fas fa-home"></i> Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        {
                            isLoggedIn ? (
                                <>
                                    <NavDropdown title={<span><i className="fa-solid fa-user"></i> Account</span>} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#profile">Profile Page</NavDropdown.Item>
                                        <NavDropdown.Item href="#action">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#something">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => setIsLoggedIn(false)}>Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Nav.Link className="ms-2 mr-2" >Login</Nav.Link>
                                    <Nav.Link className="ms-2" >Sign Up</Nav.Link>
                                </>
                            )
                        }
                    </Nav>
                    
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
