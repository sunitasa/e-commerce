import React from 'react'

export default function Features() {
  return (
    <section className='features my-4'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3 bg-success text-light border h-100%'>
            <img className='rounded-circle bg-light' src='/images/bus.svg' alt='bus icon' />
            <h5>Free Shipping</h5>
            <p>Free shipping with discount</p>
          </div>
          <div className='col-md-3 border h-100%'>
          <img className='rounded-circle bg-light' src='/images/earphone.svg' alt='ear phone icon' />
            <h5>Great Support 24/7</h5>
            <p>Instant access to Contact</p>
          </div>
          <div className='col-md-3 border h-100%'>
          <img className='rounded-circle bg-light' src='/images/bag.svg' alt='bag icon' />
            <h5>100% Sucure Payment</h5>
            <p>We ensure your money is save</p>
          </div>
          <div className='col-md-3 border 100%'>
          <img className='rounded-circle bg-light' src='/images/gift.svg' alt='gift icon' />
            <h5>Money-Back Guarantee</h5>
            <p>30 days money-back guarantee</p>
          </div>
        </div>
      </div>
    </section>
  )
}
