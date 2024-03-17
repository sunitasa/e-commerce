import React from 'react'

export default function SiteHeader() {
  return (
    <section className=''>
      <div className="container">
        <nav className="navbar">
          <a className="navbar-brand">
            <img src='/images/brand-icon.png' alt='brand icon' />
            Ecobazar
          </a>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div className='icon-area d-flex align-items-center'>
            <img className='header-icon' src='/images/favorite.svg' alt='favorite' />
            <div className='vr-separator m-0 ms-2 me-2'></div>
            <img className='header-icon me-2' src='/images/bag.svg' alt='bag' />
            <div className='font-small lh-sm'>
              <p className='m-0 text-secondary'>Shopping cart:</p>
              <p className='m-0 fw-bold'>$57.00</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
