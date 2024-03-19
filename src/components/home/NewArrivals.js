import React, { useEffect, useState } from 'react'

export default function NewArrivals() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  // Get Products & categories from Store API
  useEffect(() => {
    // Get Categories
    fetch('https://fakestoreapi.com/products/categories')
      .then(res => res.json())
      .then(categoriesData => {
        setCategories(categoriesData)
      });
  },[]);

  // Get products when category choosen
  useEffect(() => {
    let apiUrl;
    if(selectedCategory === ''){
      apiUrl = 'https://fakestoreapi.com/products?limit=8';
    } else {
      apiUrl = `https://fakestoreapi.com/products/category/${selectedCategory}?limit=8`;
    }
    // Get Products
    fetch(apiUrl)
     .then(res => res.json())
     .then(productsData => {
       setProducts(productsData)
     });
  }, [selectedCategory])

  function addToCart(product) {
    alert("Add me to cart");
    console.log(product);
    // Hit Add to cart API and post product to cart
    // Display CartPreview on success
  }

  return (
    <section className='newarrival bg-light py-5'>
      <div className='container pt-5'>
        <div className='row d-flex pt-4'>
          <div className='col text-center'>
            <h5 className='fs-3 fw-bold mb-3'>Introducing Our Products</h5>
            <ul className="list-group list-group-horizontal justify-content-center mb-4">
              <li className="list-group-item text-success pointer" onClick={()=> setSelectedCategory('')}>All</li>
              { categories.map((category, index) => {
                  return(<li key={`category-${index}`} className="list-group-item pointer" onClick={()=> setSelectedCategory(category)}>{category}</li>)
              })}
            </ul>
          </div>
        </div>
        <div className='row g-1'>
          { products.map((product, index) => {
              return (<div key={`new-product-${index}`} className="col-md-3">
                <div className="card h-100 border-0 pointer">
                  {/* <img src="/images/apple.svg" className="card-img-top img-fluid" alt={product.title} /> */}
                  <img src={product.image} className="card-img-top img-fluid" alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title fs-6 fw-bold">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <button onClick={()=>addToCart(product)} className="btn lh-1 btn-add-to-cart border">
                      <img className='add-to-cart-icon' src='/images/bag.svg' alt='gift icon' />
                    </button>
                  </div>
                </div>
              </div>)
            })
          }
        </div>
      </div>
    </section>
  )
}