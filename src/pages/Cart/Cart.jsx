// src/pages/Cart/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementProduct, decrementProduct, removeProduct } from '../../redux/actions/cartActions';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart); // Access the cart from the Redux store
  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    dispatch(incrementProduct(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementProduct(id));
  };

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const calculateTotal = () =>
    cart.reduce((acc, product) => acc + product.price * product.count, 0).toFixed(2);

  return (
    <div className='cartBlock'>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <table className='cartTable'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>
                  <button onClick={() => handleDecrement(product.id)}>-</button>
                  {product.count}
                  <button onClick={() => handleIncrement(product.id)}>+</button>
                </td>
                <td>${(product.price * product.count).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleRemove(product.id)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Total: ${calculateTotal()}</h3>
    </div>
  );
};

export default Cart;
