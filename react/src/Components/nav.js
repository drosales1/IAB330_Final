import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './nav.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import qld from './qld.png';


// Nav bar is used throughout every page
export default function nav(){
    return(
        <>
         <Navbar bg="light" variant="light">

        <Navbar.Brand href="/"><img src={qld} alt="qld" className='logo'/></Navbar.Brand> 

        <Nav className="me-auto">
            <Nav.Link eventKey={1} href="/">Home</Nav.Link>
            <Nav.Link eventKey={2} href="/ward">Wards</Nav.Link>
            <Nav.Link eventKey={3} href="/staff">Staff</Nav.Link>
        </Nav>

        <Nav className="justify-content-end">
            <Nav.Link eventKey={4} href="#settings">Settings</Nav.Link>
            <Nav.Link eventKey={5} href="#login">Login</Nav.Link>
        </Nav>
        </Navbar>
        </>

    )
}