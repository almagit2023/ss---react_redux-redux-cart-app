import React from 'react'
import { PiSuitcaseSimpleFill } from "react-icons/pi";
import { TfiFaceSad } from "react-icons/tfi";
import { useNavigate, Link } from 'react-router-dom';

const EmptyCart = () => {

  const navigate = useNavigate()
  return (
    <div className="emptyCartStyle">
      <p style={{ fontSize: "2rem", color: 'lightgray' }}>Your cart is empty </p>
      <PiSuitcaseSimpleFill style={{ fontSize: "2rem", color: 'lightgray' }} /><br />
      <TfiFaceSad style={{ fontSize: "2rem", color: 'lightgray' }} /><br />
      <Link to='/home'>Add Products to your Cart</Link>
    </div>
  )
}

export default EmptyCart