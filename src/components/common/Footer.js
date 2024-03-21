import React from 'react'

export default function Footer() {
  return (
    <section id='footer' className='footer-up pt-5 pb-5'>
      <div className='container pt-5'>
        <div className='row mt-5'>
          <div className='col-md-4'>
            <a className="navbar-brand">
              <img className='me-2' style={{height:'28px'}} src='/images/brand-icon.svg' alt='brand icon' />
              <span className='fw-bold color-dark fs-5 lh-base'>Ecobazar</span>
            </a>
          </div>
          <div className='col-md-4'>
            <h6>Subcribe our Newsletter</h6>
            <p>Pellentesque eu nibh eget mauris congue mattis matti.</p>
          </div>
          <div className='col-md-4'>
            <div class="bg-white rounded-pill d-flex">
              <input type="text" class="border-0 flex-grow-1 rounded-pill px-4 outline-0" placeholder="Your Email" />
              <button class="btn btn-success rounded-pill align-self-end px-5">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
