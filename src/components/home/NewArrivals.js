import React from 'react'

export default function NewArrivals() {
  return (
    <section className='newarrival bg-light'>
      <div className='container'>
        <div className='row text-center d-flex'>
          <div className='col'>
            <h5>Introducing Our Products</h5>
            <ul className="list-group list-group-horizontal offset-md-4 pb-3 border-0">
              <li className="list-group-item text-success">All</li>
              <li className="list-group-item ">Vegetable</li>
              <li className="list-group-item ">Fruit</li>
              <li className="list-group-item ">Meat & Fish</li>
              <li className="list-group-item ">View All</li>
            </ul>
          </div>
        </div>
        <div className='row'>
        <div className="card">
        <img src="/images/apple.svg" className="card-img-top img-fluid" alt="apple" />
        <div className="card-body">
            <h5 className="card-title">Green Apple</h5>
            <p className="card-text">$14.99$20.99</p>
            <a href="#" className="btn btn-primary"></a>
          </div>
        </div>

        </div>
      </div>
    </section>
  )
}
