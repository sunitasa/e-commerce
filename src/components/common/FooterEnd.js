import React from 'react'

export default function FooterEnd() {
  return (
    <section className="footer footer-buttom">
    <div className="container">
      <div className="row p-5">
        <div className="col-md-3">
          <img src='images/brand-icon.svg' alt="ngo logo" />
          <h5 className="text-light">About Shopery</h5>
          <p className="text-light">Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.</p>
        </div>
        <div className="col-md-2">
          <h2 className="text-light">My Account</h2>
            <ul className='p-0 m-0'>
              <li>
                <a className="text-decoration-none text-light" href="#">My Account</a>
              </li>
              <li>
                <a className="text-decoration-none text-light" href="#">Order History</a>
              </li>
              <li>
                <a className="text-decoration-none text-light" href="#">Shoping Cart</a>
              </li>
              <li>
                <a className="text-decoration-none text-light" href="#">Wishlist</a>
              </li>
            </ul>
        </div>
        <div className="col-md-2">
            <h2 className="text-light">Helps</h2>
            <ul className='m-0 p-0'>
              <li>
                <a className="text-decoration-none text-light" href="#">Contact</a>
              </li>
              <li>
                <a className="text-decoration-none text-light" href="#">Faqs</a>
              </li>
              <li>
                <a className="text-decoration-none text-light" href="#">Terms & Condition</a>
              </li>
              <li>
                <a className="text-decoration-none text-light" href="#">Privacy Policy</a>
              </li>
            </ul>
        </div>
        <div className="col-md-2">
          <h2 className="text-light">Address</h2>
          <p className="text-light">2464 Royal Ln. Mesa, New
            Jersey 45463</p>
        </div>
        <div className="col-md-3">
          <label for="formGroupExampleInput" className="form-label text-light">Newsletter</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter your email" />
          <p className="text-light">Your email is safe with us,we don’t spam.</p>
          <div className="row">

            <h4 className='text-light'>Follow Me</h4>
            <div className="col-md-3">
              <div className="ngo-logo">
                <img src="images/applepay.svg" alt="apple pay" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="ngo-logo">
                <img src="images/visa-logo.svg" alt="visa pay" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="ngo-logo">
                <img src="images/discover.png" alt="discover" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="ngo-logo">
                <img src="images/mastercard.png" alt="master card" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>
  )
}

