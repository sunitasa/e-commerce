import React from 'react'

export default function Features() {
  return (
    <section id='features' className='bg-white'>
      <div className='container'>
        <div className='row border-top'>

          <div className='col-md-3 feature-box bg-success text-light border-bottom pointer'>
            <div className='h-100 p-4'>
              <div className='circle p-2 bg-light'>
                <img className='feature-icon' src='/images/bus.svg' alt='bus icon' />
              </div>
              <h5 className='mt-3 fs-base fw-bold'>Free Shipping</h5>
              <p className='mb-0 text-tertiory'>Free shipping with discount</p>
            </div>
          </div>

          <div className='col-md-3 feature-box bg-white border-end border-bottom pointer'>
            <div className='h-100 p-4'>
              <div className='circle p-2 bg-white border'>
                <img className='feature-icon' src='/images/earphone.svg' alt='ear phone icon' />
              </div>
              <h5 className='mt-3 fs-base fw-bold'>Great Support 24/7</h5>
              <p className='mb-0'>Instant access to Contact</p>
            </div>
          </div>

          <div className='col-md-3 feature-box bg-white border-end border-bottom pointer'>
            <div className='h-100 p-4'>
              <div className='circle p-2 bg-white border'>
                <img className='feature-icon' src='/images/bag.svg' alt='bag icon' />
              </div>
              <h5 className='mt-3 fs-base fw-bold'>100% Sucure Payment</h5>
              <p className='mb-0'>We ensure your money is save</p>
            </div>
          </div>

          <div className='col-md-3 feature-box bg-white border-end border-bottom pointer'>
            <div className='h-100 p-4'>
              <div className='circle p-2 bg-white border'>
                <img className='feature-icon' src='/images/gift.svg' alt='gift icon' />
              </div>
              <h5 className='mt-3 fs-base fw-bold'>Money-Back Guarantee</h5>
              <p className='mb-0'>30 days money-back guarantee</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}