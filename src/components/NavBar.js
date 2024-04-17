import React, { useState } from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/img/logo-removebg.png';
import styles from '../styles/NavBar.module.css';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    // Simulated authentication state
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    return (
        <Navbar className={styles.NavBar} expand="md" fixed='top'>
            <Container>
                <NavLink to='/'>
                <Navbar.Brand ><img src={logo} alt="logo" height="75" />Recipe Domain</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto text-left">
                        <NavLink className="nav-link" to='/'><i className="fas fa-home"></i> Home</NavLink>
                        <NavLink className="nav-link" to='/Link'>Link</NavLink>
                    </Nav>
                    <Nav className='ml-auto text-left'>
                        {
                            isLoggedIn ? (
                                <>
                                    <NavDropdown title={<span><i className="fa-solid fa-user"></i> Account</span>} id="basic-nav-dropdown">
                                        <NavDropdown.Item as={NavLink} to="/profile" >Profile Page</NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to="/action" >Another action</NavDropdown.Item>
                                        <NavDropdown.Item as={NavLink} to="/something" >Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item onClick={() => setIsLoggedIn(false)}> <i class="fa-solid fa-right-from-bracket"></i> Sign Out</NavDropdown.Item>
                                    </NavDropdown>
                                </>
                            ) : (
                                <>
                                    <NavLink className="nav-link ms-2" to="/login"><i class="fa-solid fa-right-to-bracket"></i> Login</NavLink>
                                    <NavLink className="nav-link ms-2" to="/signup"><i class="fa-solid fa-user-plus"></i> Sign Up</NavLink>
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
