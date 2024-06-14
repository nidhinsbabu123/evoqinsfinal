import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './filterAndCards.css'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function FilterAndCards() {
    return (
        <>

            <div>

                <div>

                    {/* Dropdown */}

                    <div className='text-end'>

                        <Form.Group className='w-50 ms-auto' as={Col} controlId="formGridState">
                            <Form.Select defaultValue="Select...">
                                <option>Select...</option>
                                <option>Newly added</option>
                            </Form.Select>
                        </Form.Group>

                    </div>

                    {/* Cards */}

                    <div className='bg-info mt-5'>
                        <Row>
                            <Col sm={12} md={12} lg={6} className='bg-warning' >

                                {/* Card One */}

                                <div className='cardOne bg-white'>
    
                                    
                                    <img className='cardOneBackground' src="./images/cardOneBackground.svg" alt="" />
                                    <img className='cardOneImageShadow' src="./images/cardOneImageShadow.svg" alt="" />
                                    <img className='cardOneImg' src="./images/cardOneImg.svg" alt="" />
                                    <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                    <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />

                                    <span className='cardOneTextHead'>Invest in ideas with Small case</span>
                                    <p className='cardOneDescription' >Smallcases are investment products that help build a diversified, low-cost & long term portfolio.</p>

                                    <div className='price'>
                                        <p>Price: ₹ 100 <span>per smallcase (buy)</span> </p>
                                    </div>

                                    <div className='offerPrice'>

                                        <p>Offer Price: <span className='spanOne'>Free</span> <span className='spanTwo'>for customers</span></p>

                                    </div>

                                    <Button className='viewBtn' variant="primary">View More Details</Button>
                                    <Button className='openBtn' variant="outline-primary">Open an Account</Button>


                                </div>

                                {/* Card Two */}

                                <div className='cardTwo bg-white'>

                                <img className='cardTwoBackground' src="./images/cardOneBackground.svg" alt="" />
                                <img className='cardTwoImageShadow' src="./images/cardOneImageShadow.svg" alt="" />

                                </div>

                            </Col>

                            <Col sm={12} md={12} lg={6} >

                            

                            </Col>

                        </Row>
                    </div>

                </div>

            </div>

        </>
    )
}

export default FilterAndCards