import React, { useEffect } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './filterAndCards.css'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { getList } from '../services/AllApi';



function FilterAndCards() {

    useEffect(() => {
        getFilter();
    },[])

    const getFilter = async () => {
        const response = await getList()
        console.log(" Response is : ", response);
    }

    return (
        <>

            <div>

                <div>

                    {/* Dropdown */}

                    <div className='text-end'>

                        <Form.Group className='w-50 ms-auto' as={Col} controlId="formGridState">
                            <Form.Select defaultValue="" onChange={() => getFilter()} >
                                <option value={1}>Newly added</option>
                                <option value={2}>Top Rated</option>
                                <option value={3}>Top performing</option>
                                <option value={4}>Name</option>
                                <option value={5}>Price Low to High</option>
                                <option value={6}>Price High to Low</option>
                            </Form.Select>
                        </Form.Group>

                    </div>

                    {/* Cards */}

                    <div className='mt-5'>
                        <Row>
                            <Col sm={12} md={12} lg={6} className='mb-3' >

                                {/* Card One */}

                                <div className='cardOne bg-white rounded mb-3'>

                                    <div className='cardOneImgDiv mx-auto rounded-top'>
                                        <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                        <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />
                                        <img className='cardOneStar' src="./images/cardOneStar.svg" alt="" />
                                        <div className='review text-white'> <span>(20 reviews)</span> </div>
                                        <img className='cardOneImg' src="./images/cardOneImg.svg" alt="" />
                                        <img className='cardOnefree' src="./images/free.svg" alt="" />
                                        <div className='shadowDiv rounded-top'></div>

                                    </div>

                                    <div className='cardOneDescripDiv px-3 py-4'>
                                        <span className='cardOneTextHead'>Invest in ideas with Small case</span>
                                        <p className='cardOneDescription mt-2' >Smallcases are investment products that help build a diversified, low-cost & long term portfolio.</p>

                                        <p className='price'>Price: ₹ 100 <span>per smallcase (buy)</span> </p>


                                        <p className='offerPrice'>Offer Price: <span className='spanOne'>Free</span> <span className='spanTwo'>for customers</span></p>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Button className='viewBtn px-4 py-2' variant="primary">View More Details</Button>
                                            <Button className='openBtn px-4 py-2' variant="outline-primary">Open an Account</Button>
                                        </div>


                                    </div>


                                </div>

                                {/* Card Two */}

                                <div className='cardOne bg-white rounded'>

                                    <div className='cardTwoImgDiv mx-auto rounded-top'>
                                        <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                        <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />
                                        <img className='cardOneStar' src="./images/cardOneStar.svg" alt="" />
                                        <div className='review text-white'> <span>(20 reviews)</span> </div>
                                        <img className='cardOneImg' src="./images/cardTwoImg.svg" alt="" />
                                        <img className='cardOnefree' src="./images/offer.svg" alt="" />
                                        <div className='shadowDiv rounded-top'></div>

                                    </div>

                                    <div className='cardOneDescripDiv px-3 py-4'>
                                        <span className='cardOneTextHead'>India's First Option trading Platform</span>
                                        <p className='cardOneDescription mt-2' >You can trade options just by knowing the stock and its direction.</p>

                                        <p className='price'>Price: ₹ 399 <span>per month</span> </p>


                                        <p className='offerPrice'>Offer Price: <span className='spanOne'>₹ 199</span> <span className='spanTwo'>for customers</span></p>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Button className='viewBtn px-4 py-2' variant="primary">View More Details</Button>
                                            <Button className='openBtn px-4 py-2' variant="outline-primary">Open an Account</Button>
                                        </div>


                                    </div>


                                </div>



                            </Col>

                            <Col sm={12} md={12} lg={6} className='' >

                            {/* Card Three */}

                            <div className='cardOne bg-white rounded mb-3'>

                                    <div className='cardThreeImgDiv mx-auto rounded-top'>
                                        <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                        <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />
                                        <img className='cardOneStar' src="./images/cardOneStar.svg" alt="" />
                                        <div className='review text-white'> <span>(10 reviews)</span> </div>
                                        <img className='cardOneImg' src="./images/cardThreeImg.svg" alt="" />
                                        <div className='shadowDiv rounded-top'></div>

                                    </div>

                                    <div className='cardOneDescripDiv px-3 py-4'>
                                        <span className='cardOneTextHead'>Buy Direct Funds at Zero Commission</span>
                                        <p className='cardOneDescription mt-2' >Never depend on a single income, make an investment to create a second one with us.</p>

                                        <p className='price'>Price: ₹ 1000 <span>for lifetime</span> </p>


                                        <p className='offerPrice'>Offer Price: <span className='spanOne'>₹ 500</span> <span className='spanTwo'>for customers</span></p>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Button className='viewBtn px-4 py-2' variant="primary">View More Details</Button>
                                            <Button className='openBtn px-4 py-2' variant="outline-primary">Open an Account</Button>
                                        </div>


                                    </div>

                                </div>

                                {/* Card four */}
                                <div className='cardOne bg-white rounded'>

                                    <div className='cardFourImgDiv mx-auto rounded-top'>
                                        <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                        <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />
                                        <img className='cardOneStar' src="./images/cardFourStar.svg" alt="" />
                                        <div className='review text-white'> <span>(0 reviews)</span> </div>
                                        <img className='cardOneImg' src="./images/cardFourImg.svg" alt="" />
                                        <div className='shadowDiv rounded-top'></div>

                                    </div>

                                    <div className='cardOneDescripDiv px-3 py-4'>
                                        <span className='cardOneTextHead'>Intraday based Semi Algo Trading Platform</span>
                                        <p className='cardOneDescription mt-2' >Optimum gives Buy above and Sell below levels for Stock Cash, Futures and MCX Markets.</p>

                                        <p className='price'>Price: ₹ 399 <span>per month</span> </p>


                                        <p className='offerPrice'>Offer Price: <span className='spanOne'>Free</span> <span className='spanTwo'>6 days trial pack</span></p>

                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Button className='viewBtn px-4 py-2' variant="primary">View More Details</Button>
                                            <Button className='openBtn px-4 py-2' variant="outline-primary">Open an Account</Button>
                                        </div>


                                    </div>

                                </div>





                            </Col>

                        </Row>
                    </div>


                </div>

                <div className='paginationDiv mt-3 mb-5'>
                    <img src="./images/pagination.svg" alt="" />

                </div>

            </div>

        </>
    )
}

export default FilterAndCards