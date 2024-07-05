import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import './filterAndCards.css'
import { Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { searchContext, searchTextContext, sortContext } from './ContextShare';
import { getList, postingTheList } from '../services/AllApi';




function FilterAndCards() {

    const [listData, setListData] = useState([])

    const [sortList, setSortList] = useState('1')

    const { sortValue, setSortValue } = useContext(sortContext)
    const { searchValue, setSearchValue } = useContext(searchContext);
    const { searchTextBox, setSearchTextBox } = useContext(searchTextContext)

    const [errors, setErrors] = useState(null)

    const [posted, setPosted] = useState([])

    // console.log("Search Context :", searchValue);




    const handleFilter = (e) => {
        setSortList(e.target.value)
    }

    const sortStatus = parseInt(sortList)

    // console.log("Sort Status is :", sortStatus);


    const getFilter = async () => {
        const response = await getList()
        setListData(response);
    }



    // console.log("Get data :", listData);




    useEffect(() => {
        // console.log("Input details is :", sortValue);
        postList(sortValue, sortStatus)
        // getFilter();

    }, [sortValue, sortStatus])




    // DATA POST

    const postList = async (details, sortStatus) => {

        try {

            const header = {
                "content-type": "application/json",
                'Access-Token': 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTYwODEwMDI4MCwiZXhwIjoxNjE1ODc2MjgwfQ.eyJ0eXBlIjozLCJpZCI6MTQ5MzMsImNyZWF0ZWQiOiIyMDIwLTEyLTE2IDA2OjMxOjIwLjczMTk2NiJ9.Ef001xBUX_ZPsgvGWCou9sUa6Q2BV9jvPWZZsnwE8qB3_IDTGaSNV0d0lmcuWab2FwEUQ3GouA9LVdd7ExmkvQ'
            };

            const fullDetails = {
                "page_num": 1,
                "filter_id": null,
                "segment_id": null,
                "price_type": null,
                "rating_by": details.rating_by,
                "application_type": details.application_type,
                "min_price_limit": 0,
                "max_price_limit": 29500000,
                "min_investment_limit": 0,
                "max_investment_limit": 100000000,
                "sort_by": sortStatus
            }

            const data = await postingTheList(fullDetails, header);


            if (data.status === 200) {

                await getFilter()

            }

            if (data.error) {
                throw new Error(data.message)
            }
            // console.log("The posted data is :", data);

            setPosted(data.data.data.products)

        } catch (error) {
            console.error("Error in the posting the list :", error)
            setErrors(error.message)
        }

    }

    // console.log("Set Posted is :", posted);
    // console.log("Search Text Box :", searchTextBox);



    return (
        <>

            <div>

                <div>

                    {/* Dropdown */}

                    <div className='text-end'>

                        <Form.Group className='w-50 ms-auto' as={Col} controlId="formGridState">
                            <Form.Select defaultValue="Choose..." onChange={(e) => { handleFilter(e) }}>
                                <option value="">Choose...</option>
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

                        {

                            searchTextBox ? (

                                <Row>

                                    {
                                        searchValue.length > 0 ?

                                            searchValue?.map(item => (

                                                <Col sm={12} md={6} lg={6} className='mb-3' >

                                                    <div className='cardOne bg-white rounded mb-3'>

                                                        <div style={{ backgroundImage: `linear-gradient(${item?.gradient_1}, ${item?.gradient_2})` }} className='cardOneImgDiv mx-auto rounded-top'>
                                                            <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                                            <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />
                                                            <img className='cardOneStar' src="./images/cardOneStar.svg" alt="" />
                                                            <div className='review text-white'> <span>({item?.review_count} reviews)</span> </div>
                                                            <img className='cardOneImg' src={item?.illustration} alt="" />
                                                            <img className='cardOnefree' src={item?.free ? "./images/free.svg" : ""} alt="" />
                                                            <div className='shadowDiv rounded-top'></div>

                                                        </div>

                                                        <div className='cardOneDescripDiv px-3 py-4'>
                                                            <span className='cardOneTextHead'>{item?.product_name}</span>
                                                            <p className='cardOneDescription mt-2' >{item?.description}</p>

                                                            <p className='price'>Price: ₹ {item?.price} <span>per smallcase (buy)</span> </p>


                                                            <p className='offerPrice'>Offer Price: <span className='spanOne'>₹ {item?.offer_price}</span> <span className='spanTwo'>for customers</span></p>

                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <Button className='viewBtn px-4 py-2' variant="primary">View More Details</Button>
                                                                <Button className='openBtn px-4 py-2' variant="outline-primary">Open an Account</Button>
                                                            </div>


                                                        </div>


                                                    </div>

                                                </Col>

                                            )) :
                                            <div>Nothing To Display</div>


                                    }

                                </Row>

                            ) : (
                                <Row>

                                    {
                                        posted.length > 0 ?

                                            posted.map(item => (

                                                <Col sm={12} md={6} lg={6} className='mb-3' >

                                                    <div className='cardOne bg-white rounded mb-3'>

                                                        <div style={{ backgroundImage: `linear-gradient(${item.gradient_1}, ${item.gradient_2})` }} className='cardOneImgDiv mx-auto rounded-top'>
                                                            <img className='cardOneGreenRect' src="./images/cardOneGreenRect.svg" alt="" />
                                                            <img className='cardOnepolygon' src="./images/polygon.svg" alt="" />
                                                            <img className='cardOneStar' src="./images/cardOneStar.svg" alt="" />
                                                            <div className='review text-white'> <span>({item.review_count} reviews)</span> </div>
                                                            <img className='cardOneImg' src={item?.illustration} alt="" />
                                                            <img className='cardOnefree' src={item.free ? "./images/free.svg" : ""} alt="" />
                                                            <div className='shadowDiv rounded-top'></div>

                                                        </div>

                                                        <div className='cardOneDescripDiv px-3 py-4'>
                                                            <span className='cardOneTextHead'>{item.product_name}</span>
                                                            <p className='cardOneDescription mt-2' >{item.description}</p>

                                                            <p className='price'>Price: ₹ {item.price} <span>per smallcase (buy)</span> </p>


                                                            <p className='offerPrice'>Offer Price: <span className='spanOne'>₹ {item.offer_price}</span> <span className='spanTwo'>for customers</span></p>

                                                            <div className='d-flex justify-content-between align-items-center'>
                                                                <Button className='viewBtn px-4 py-2' variant="primary">View More Details</Button>
                                                                <Button className='openBtn px-4 py-2' variant="outline-primary">Open an Account</Button>
                                                            </div>


                                                        </div>


                                                    </div>

                                                </Col>

                                            )) :
                                            <div>Nothing To Display</div>


                                    }

                                </Row>
                            )

                        }

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