import React from 'react'

export default function HeroBanner() {
  return (
    <section className='hero-banner bg-light'>
      <div className='container d-flex'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-interval="3000" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item" style={{ alignItems: "center", display: "flex", gap: 20 }}>
              <div className='row'>
                <div className='col-md-6'>
                  <img src="/images/hero-image-1.png" className="img-fluid" alt="hero images" />
                </div>
                <div className='col-md-6'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light p-2'>Shop now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-6'>
                  <img src="/images/hero2-img.png" className=" img-fluid " alt="hero img" />
                </div>
                <div className='col-md-6'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light'>Shop now</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className='row'>
                <div className='col-md-6'>
                  <img src="/images/hero2-img.png" className=" img-fluid  " alt="hero img" />
                </div>
                <div className='col-md-6'>
                  <span>Welcome to shopery</span>
                  <h3>Fresh & Health & Organic Food</h3>
                  <p>Fresh & Health Organic Food Free shipping on all your order. we deliver, you enjoy</p>
                  <button className='bg-success rounded-pill border-0 text-light mb-3'>Shop now</button>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next bg-dark" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
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

      </div>
    </section >
  );
};
