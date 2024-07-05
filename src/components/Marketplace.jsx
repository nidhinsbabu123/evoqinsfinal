import React from 'react'
import './marketplace.css'
import { Col, Row } from 'react-bootstrap'

function Marketplace() {
  return (
    <div className='mains'>

      <Row>

        
        <Col lg={12} md={12} sm={12}>

          <div className='img-fluid'>

            <div className='backgroundwall d-flex flex-column justify-content-center align-items-center rounded'>

              <div className='welcome text-white'>Welcome to <span>marketplace</span>!</div>

              <div className='subtitle mx-auto'>
                <p className='tagline text-center mt-2'>India's first products marketplace with <br /> advanced tools & apps to empower your every trade!</p>
              </div>

              <img className='img1 img-fluid w-100 rounded fluid' src="./images/mask-group.svg" alt="" />


            </div>

          </div>


        </Col>
        
        

      </Row>



    </div>
  )
}

export default Marketplace