import React from 'react'

export default function Testimonials() {
  return (
   <section id='testimonials' className=' footer-up'>
    <div className='container'>
      <h4 className='text-center pt-4'>What our Clients Says</h4>
      <div className='row g-3'>
        <div className='col-md-4 text-center p-3'>
          <img className='img-fluid' src='/images/leaf.svg' alt='leaf' />
          <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
          <img className='img-fluid' src='/images/1stimg.png' alt='person img' />
          <h5>Jenny Wilson</h5>
          <p>Customer</p>
        </div>
        <div className='col-md-4 text-center p-3'>
        <img className='img-fluid' src='/images/leaf.svg' alt='leaf' />
          <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
          <img className='img-fluid' src='/images/1stimg.png' alt='person img' />
          <h5>Jenny Wilson</h5>
          <p>Customer</p>
        </div>
        <div className='col-md-4 text-center p-3'>
        <img className='img-fluid' src='/images/leaf.svg' alt='leaf' />
          <p>“Aenean et nisl eget eros consectetur vestibulum vel id erat. Aliquam feugiat massa dui. Sed sagittis diam sit amet ante sodales semper. Aliquam commodo lorem laoreet ultricies ele. ”</p>
          <img className='img-fluid' src='/images/1stimg.png' alt='person img' />
          <h5>Jenny Wilson</h5>
          <p>Customer</p>
        </div>
      </div>
      <div className='video text-center negative-margin pt-5 mt-5'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Jhb471IhydE" title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen="false">
          </iframe>
      </div>
    </div>
   </section> 
    
  )
}
