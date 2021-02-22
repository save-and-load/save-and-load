import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">Save & Load</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} exact to="/">메인</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/manual">법전</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/univ">대학 확인</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/gallery">갤러리</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} exact to="/log">Update Log</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Menu;