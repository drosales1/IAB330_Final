import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Staff.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';

export default function Staff(){
    return(
        <>
            {/* Search bar to search doctors and what rooms they're occupying */}
            <Navbar bg="light" variant="light" className="srch">
            <Form className="d-flex">
                <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                <Button variant="outline-success">Search</Button>
            </Form>

            <Nav className="me-auto">
                <Nav.Link eventKey={1} href="/staff">List</Nav.Link>
                <Nav.Link eventKey={2} href="/staff">Grid</Nav.Link>
                {/* add icons  */}
            </Nav>
            </Navbar>
            <br />
            <br />

            {/* Doctors and their status */}
            <Card className="box">
                <Card.Img className="img" src="" />
                <Card.Body>
                    <h3>Dr Smith</h3>
                    <h4>General Practitioner</h4>
                    This is some text within a card bodyakufkdahfbvkjabvhjarbvkjhab.</Card.Body>
                <Badge className ="rmstatus" pill bg=''>Unavailable</Badge>
                <Badge className ="rmnum" pill bg=''>Room 305: 5</Badge>
            </Card>
            <br />

            <Card className="box">
                <Card.Img className="img" src="" />
                <Card.Body>
                    <h3>Dr Johnson</h3>
                    <h4>General Practitioner</h4>
                    This is some text within a card bodyakufkdahfbvkjabvhjarbvkjhab.</Card.Body>
                <Badge className ="rmstatus" pill bg=''>Unavailable</Badge>
                <Badge className ="rmnum" pill bg=''>Room 435: 3</Badge>
            </Card>
            <br />

            <Card className="box">
                <Card.Img className="img" src="" />
                <Card.Body>
                    <h3>Dr Williams</h3>
                    <h4>General Practitioner</h4>
                    This is some text within a card bodyakufkdahfbvkjabvhjarbvkjhab.</Card.Body>
                <Badge className ="rmstatus1" pill bg=''>Available</Badge>
            </Card>
            <br />

            <Card className="box">
                <Card.Img className="img" src="" />
                <Card.Body>
                    <h3>Dr Miller</h3>
                    <h4>General Practitioner</h4>
                    This is some text within a card bodyakufkdahfbvkjabvhjarbvkjhab.</Card.Body>
                <Badge className ="rmstatus" pill bg=''>Unavailable</Badge>
                <Badge className ="rmnum" pill bg=''>Room 241: 1</Badge>
            </Card>
        </>
    )
}
