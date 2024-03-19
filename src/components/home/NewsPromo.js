import React from 'react'

export default function NewsPromo() {
  return (
    <section id="news-promo">
      <div className='container pt-5 mt-5'>
        <h4 className='text-center mt-5 pt-5'>Latest News</h4>
        <div className=" negative-margin row g-3">
          <div className='col-md-4'>
            <div className="card border-0 p-3">
              <img src="/images/fruits.png" className="img-fluid card-img-top" alt="fruit" />
              <div className="card-body px-0">
                <h5 className="card-title">Curabitur porttitor orci eget neque accumsan venenatis.</h5>
                <p className="card-text">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque..</p>
                <button className="border-0 text-success">Read More</button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card border-0 p-3">
              <img src="/images/juish.png" className=" img-fluid card-img-top" alt="jush" />
              <div className="card-body px-0">
                <h5 className="card-title">Curabitur porttitor orci eget neque accumsan venenatis.</h5>
                <p className="card-text">Nulla libero lorem, euismod venenatis nibh sed, sodales dictum ex. Etiam nisi augue, malesuada et pulvinar at, posuere eu neque..</p>
                <button className='border-0 text-success'>Read More</button>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className="card border-0 p-3">
              <img src="/images/fruits-group.png" className=" img-fluid card-img-top" alt="fruits group" />
              <div className="card-body px-0">
                <h5 className="card-title">Curabitur porttitor orci eget neque accumsan venenatis.</h5>
                <p className="card-text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                <button className="border-0 text-success">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
