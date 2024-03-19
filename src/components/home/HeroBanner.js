import React from 'react'

export default function HeroBanner() {
  return (
    <section className='hero-banner bg-white'>
      <div className='container'>
        <div id="hero-banner-carousel" className="carousel slide" data-bs-interval="2000" data-bs-ride="carousel">
          <div className="carousel-inner">
            
            <div className="carousel-item active">
              <div className="row">
                <div className='col-md-6'>
                  <img src="/images/hero-1.png" className="img-fluid" alt="hero images" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light mb-3 align-self-start px-5 py-2'>Shop now</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className='col-md-6'>
                  <img src="/images/hero-2.png" className=" img-fluid " alt="hero img" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light mb-3 align-self-start px-5 py-2'>Shop now</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className='col-md-6'>
                  <img src="/images/hero-3.png" className=" img-fluid  " alt="hero img" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light mb-3 align-self-start px-5 py-2'>Shop now</button>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="row">
                <div className='col-md-6'>
                  <img src="/images/hero-4.png" className=" img-fluid  " alt="hero img" />
                </div>
                <div className='col-md-6 d-flex flex-column justify-content-center'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light mb-3 align-self-start px-5 py-2'>Shop now</button>
                </div>
              </div>
            </div>

          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          {/* <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
        </div>

    </div>
    </section >
  );
};