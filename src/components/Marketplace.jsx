import React from 'react'
import './marketplace.css'
import { Col, Row } from 'react-bootstrap'

function Marketplace() {
  return (
    <div className='mains'>

      <Row>

        <Col lg={1} md={2} ></Col>
        <Col lg={10} md={8}>

          <div className='banner'>

            <div className='hero-container'>

              <div className='mx-auto hero-text text-center'>

                {/* Heading and text */}

                <div className='headertext'>

                  <div className='welcome'>Welcome to <span>marketplace</span>!</div>

                </div>

                <div className='subtitle mx-auto'>
                  <p className='tagline text-center'>India's first products marketplace with <br /> advanced tools & apps to empower your every trade!</p>
                </div>

              </div>

            </div>

            <div className='backgroundwall'>


              <img className='img1 text-center' src="./images/rectangle44.svg" alt="" />


              <img className='img1' src="./images/mask-group.svg" alt="" />
                

            </div>

          </div>


        </Col>
        <Col lg={1} md={2}></Col>

      </Row>



    </div>
  )
}

export default Marketplace