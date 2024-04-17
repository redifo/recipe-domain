import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/logo-removebg.png';
import styles from '../styles/NavBar.module.css';

const NavBar = () => {
    // Simulated authentication state
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Navbar className={styles.NavBar} expand="md" fixed='top'>
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="logo" height="75" />Recipe Domain</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-left">
                        <Nav.Link href="#home"><i className="fas fa-home"></i> Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto text-left'>
                        {
                            isLoggedIn ? (
                                <>
                                    <NavDropdown title={<span><i className="fa-solid fa-user"></i> Account</span>} id="basic-nav-dropdown">
                                        <NavDropdown.Item href="#profile">Profile Page</NavDropdown.Item>
                                        <NavDropdown.Item href="#action">Another action</NavDropdown.Item>
                                        <NavDropdown.Item href="#something">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => setIsLoggedIn(false)}> <i class="fa-solid fa-right-from-bracket"></i> Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <Nav.Link className=" ms-2" ><i class="fa-solid fa-right-to-bracket"></i> Login</Nav.Link>
                                    <Nav.Link className=" ms-2" ><i class="fa-solid fa-user-plus"></i> Sign Up</Nav.Link>
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
