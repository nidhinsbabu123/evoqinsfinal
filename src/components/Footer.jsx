import React from 'react'
import './footer.css'
import { Button } from 'react-bootstrap'

function Footer() {
  return (
    <>

        <div className='mt-5'>
            <div className='footerBackgroundwall d-flex flex-column justify-content-center align-items-center'>

                <div className='footerWelcome text-white'>Join the <span>family</span> today</div>
                <div className='footerSubtitle mx-auto'>
                <p className='footerTagline text-center mt-2'>Take advantage of the various products to build your own <br /> customized trading strategies.</p>
              </div>

              <Button className='footerOpenBtn px-4 py-3' variant="light">Open new account</Button>

                <img className='footerImg1 w-100' src="./images/footerBanner.svg" alt="" />

            </div>
        </div>

    </>
  )
}

export default Footer