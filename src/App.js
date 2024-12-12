import React from 'react'
import NavBar from './components/NavBar/NavBar';
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import './App.css'
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <h1 className='cartHeader'>SS MART</h1>
      <NavBar />
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App