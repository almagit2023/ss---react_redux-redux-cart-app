import React, { useState, useEffect } from 'react'
import './Home.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/actions/cartActions'
import axios from 'axios'

const Home = () => {


  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      const { data } = await axios.get('https://dummyjson.com/products');
      const products = data.products;
      console.log("Products:", products);
      return products;
    }

    catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productsData = await getData();
      setProducts(productsData); // Set the state here
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