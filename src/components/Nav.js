import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Menu() {
    return (
        <div className="App">

            {/* Navigation */}
            <Navbar className="sticky-top mb-5" bg="success" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#">Dream Team</Navbar.Brand>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#">Accueil</Nav.Link>
                        <Nav.Link href="#">Staff</Nav.Link>
                        <Nav.Link className='text-white' href="#">Equipe</Nav.Link>
                        <Nav.Link href="#">Sponsors</Nav.Link>
                        <Nav.Link href="#">Contact</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Menu;