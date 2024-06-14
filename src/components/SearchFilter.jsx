import React from 'react'
import SearchAndList from './SearchAndList'
import FilterAndCards from './FilterAndCards'
import { Col, Row } from 'react-bootstrap'

function SearchFilter() {
  return (
    <>

        <div className=''>

            <Row>

                <Col lg={4} md={4} sm={6} >

                    <SearchAndList/>

                </Col>

                <Col lg={8} md={8} sm={12} >

                    <FilterAndCards/>

                </Col>

            </Row>


        </div>

    </>
  )
}

export default SearchFilter