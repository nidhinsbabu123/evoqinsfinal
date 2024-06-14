import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './topbar.css'
import { Col, Row } from 'react-bootstrap';

function Topbar() {

    const [selected, setSelected] = useState(null)

    const handleSelection = (selection) => {
        setSelected(selection);
    };

    return (
        <div>
            <Row>

                <Col lg={1}></Col>
                <Col lg={10}>

                    <div>
                        <div className='topbardiv'>
                            {['lg'].map((expand) => (
                                <Navbar key={expand} expand={expand} className="bg-warnin mb-3">
                                    <Container fluid>
                                        <Navbar.Brand href="#" className='fw-bolder evoque fs-6' >Evoque Innovative Lab</Navbar.Brand>
                                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                                        <Navbar.Offcanvas
                                            id={`offcanvasNavbar-expand-${expand}`}
                                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                                            placement="end"
                                        >
                                            <Offcanvas.Header closeButton>
                                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                                    Offcanvas
                                                </Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body>
                                                <Nav className="justify-content-center bg-succes flex-grow-1 pe-3">
                                                    <Nav.Link href="#action1" className={`navlinks me-1 ${selected === 'About' ? 'selected' : ''}`} onClick={() => handleSelection('About')} >About</Nav.Link>
                                                    <Nav.Link href="#action2" className={`navlinks mx-1  ${selected === 'Marketplace' ? 'selected' : ''}`}
                                                        onClick={() => handleSelection('Marketplace')}>Marketplace</Nav.Link>
                                                    <Nav.Link href="#action3" className={`navlinks mx-1 ${selected === 'Resources' ? 'selected' : ''}`}
                                                        onClick={() => handleSelection('Resources')}>Resources</Nav.Link>
                                                    <Nav.Link href="#action4" className={`navlinks me-1 ${selected === 'Contact' ? 'selected' : ''}`}
                                                        onClick={() => handleSelection('Contact')}>Contact</Nav.Link>
                                                </Nav>
                                            </Offcanvas.Body>
                                        </Navbar.Offcanvas>
                                        <div className='mx-2 sm-mx-0'>

                                            <Button variant="outline-primary loginbtn">Login</Button>
                                            <Button variant="primary ms-2 loginbtn">Sign Up</Button>

                                        </div>
                                    </Container>
                                </Navbar>
                            ))}

                        </div>
                    </div>


                </Col>
                <Col lg={1}></Col>

            </Row>


        </div>
    )
}

export default Topbar