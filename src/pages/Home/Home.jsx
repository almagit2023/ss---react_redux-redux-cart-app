import React, { useState, useEffect } from 'react'
import { productsList } from '../../products/products'
import './Home.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions/cartActions'

const Home = () => {


  const [products, setProducts] = useState(productsList);
  const dispatch = useDispatch();

  useEffect(() => {
    // Simulating an API call
    const fetchProducts = async () => {
      const data = productsList
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const handleAddProduct = (product) => {
    dispatch(addProduct(product))
  }

  return (
    <div className='productBlock'>
      {products.map((item) => (
        <div key={item.id} className='productItem'>
          <img src={item.images[0]} alt={item.title} width="20%" />
          <p>{item.title}</p>
          <p>${item.price}</p>
          <button className='addToCartBtn' onClick={() => handleAddProduct(item)}>Add to cart</button>
        </div>
      ))}
    </div>
  )
}

export default Home