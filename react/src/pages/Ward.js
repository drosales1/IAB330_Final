import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Ward.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import Room from './Room.png';
import W_Room from './Ward.png';

export default function Ward(){

    const [key, setKey] = useState('Room');
    return(
        <>
            <br />
            {/* Reactive tab changes contents while staying on same page */}
            <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="tbs">
                <Tab eventKey="room" title="Room">
                    <br />
                    <Container>
                        <Row>
                            <Col className="col1">
                            <br />
                                <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            <br />
                                <div>
                                    <h5>General Ward (63)</h5>
                                </div>
                            <br />
                                {/* List showing rooms available in hostpital */}
                                <ListGroup as="ol">
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">ER</div>
                                        <Badge bg="primary" pill>51</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">OR</div>
                                        <Badge bg="primary" pill>43</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">CCU</div>
                                        <Badge bg="primary" pill>49</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">ICU</div>
                                        <Badge bg="primary" pill>32</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">SIC</div>
                                        <Badge bg="primary" pill>53</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">PACU</div>
                                        <Badge bg="primary" pill>48</Badge>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                            {/* Image of current room layout */}
                            <Col xs={6} className="col2">
                                <div>
                                    <h4>Room 304</h4>
                                    <br />
                                    <img src={W_Room} alt="ward" className='wardroom'/>
                                </div>
                            </Col>
                            {/* Current doctor occupying room and how many patients occupying space */}
                            <Col className="col3">
                            <br />
                            <br />
                                <Card border="secondary" className ='crd'>
                                <Badge className="status" pill bg="danger">Status: Occupied</Badge>
                                
                                <Card.Body className ='txt'>Dr Smith: 5</Card.Body>
                                <Badge className="curr" pill bg="success">Currently: 2</Badge>
                                </Card>
                                <br />
                                <br />
                                <Card border ="secondary" className='crd1'>
                                    <Card.Body>
                                        <h5>Room 304</h5>
                                        General wards are commonly used for general practices
                                        and can fit a maximum of 5 people.
                                        General wards mostly consist of:
                                        <br />
                                        <br />
                                            - 1 Bed
                                        <br />
                                            - 1 Desk
                                        <br />
                                            - 1 Bench
                                        <br />   
                                        <br />
                                        Medical equipment usually found in general wards include:
                                        <br />
                                        <br />
                                            - Stethoscopes
                                        <br />
                                            - Body weight scales and height rods
                                        <br />
                                            - Basic diagnosis equipment
                                            </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </Tab>
                
                {/* Room analytics page */}
                <Tab eventKey="data" title="Data">
                <br />
                    <Container>
                        <Row>
                            <Col sm={4}className="col1">
                            <br />
                                <Form className="d-flex">
                                    <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"/>
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                            <br />
                                <div>
                                    <h5>General Ward (63)</h5>
                                </div>
                            <br />
                                {/* List showing rooms available in hostpital */}
                                <ListGroup as="ol">
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">ER</div>
                                        <Badge bg="primary" pill>52</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">OR</div>
                                        <Badge bg="primary" pill>43</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">CCU</div>
                                        <Badge bg="primary" pill>49</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">ICU</div>
                                        <Badge bg="primary" pill>32</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">SIC</div>
                                        <Badge bg="primary" pill>53</Badge>
                                    </ListGroup.Item>
                                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                                        <div className="fw-bold">PACU</div>
                                        <Badge bg="primary" pill>48</Badge>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>

                            {/* Heat map of room displaying most occupied space */}
                            <Col sm={8}className="col2">
                                <div>
                                    <h4>Room 304</h4>
                                </div>
                                <br />
                                <Table style={{ backgroundImage: `url(${Room})` }}className ='grid' responsive="sm">
                                <tbody>
                                <tr className='cold'>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'cold'>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                            
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td> 
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                            
                                <tr className = 'warm'>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td> 
                                    <td>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'warm'>
                                    <td className = 'cold'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td className = 'hot'>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className = 'cold'>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td className = 'cold'>**</td>
                                </tr>
                                <tr className='cold'>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                    <td>**</td>
                                </tr>
                                
                                </tbody>
                            </Table>
                            </Col>
                        </Row>
                    </Container> 
                </Tab>
            </Tabs>
            
            
        </>
    )
}