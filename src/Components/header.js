import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="fixed-top relative myNavbar">
                <Container>
                    <Navbar.Brand href="#">Lungs Cancer Analysis</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="justify-content-end" >
                        <Nav.Link className="navItem"><Link to="/">Home</Link></Nav.Link>
                        <Nav.Link className="navItem"><Link to="/listData">CRUD Operations</Link></Nav.Link>
                        <Nav.Link className="navItem"><Link to="/createRec">Create a Record</Link></Nav.Link>
                        <Nav.Link className="navItem"><Link to="/analytics">Analytics</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default Header;