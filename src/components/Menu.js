import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Menu = () => {
    const activeStyle = {
        color: 'aqua',
        fontSize: '1.5rem'
    };

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Save & Load</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} exact to="/">메인</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/manual">법전</Nav.Link>
                    <Nav.Link as={NavLink} exact to="/univ">대학 확인</Nav.Link>
                </Nav>
            </Navbar>
            <ul>
                <li><NavLink exact to="/" activeStyle={activeStyle}>메인화면</NavLink></li>
                <li><NavLink exact to="/manual" activeStyle={activeStyle}>법전/가이드북</NavLink></li>
                <li><NavLink exact to="/univ" activeStyle={activeStyle}>대학 밥 사기 리스트</NavLink></li>

                {/* Coming Soon...
                <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
                <li><NavLink to="/about/foo" activeStyle={activeStyle}>About Foo</NavLink></li>
                <li><NavLink to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
                */}
            </ul>
            <hr/>
        </div>

    );
};

export default Menu;