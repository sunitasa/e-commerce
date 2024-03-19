import React from 'react'

export default function AdBanners() {
  return (
    <section id="ads-banner" className='py-5'>
      <div className='container'>
        <div className="row g-3">
          <div className='col-md-4'>
            <img className='img-fluid w-100' src='/images/banner-1.png' alt='Ad Banner 1' />
          </div>
          <div className='col-md-4'>
            <img className='img-fluid w-100' src='/images/banner-2.png' alt='Ad Banner 2' />
          </div>
          <div className='col-md-4'>
            <img className='img-fluid w-100' src='/images/banner-2.png' alt='Ad Banner 2' />
          </div>
        </div>
      </div>
    </section>
  )
}