import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
      <button className="bg-pink-500 text-white hover:bg-white hover:text-pink-500 px-4 py-2 mt-2 rounded-4xl transition-all duration-200 ease-in-out cursor-pointer">
              Add to Cart
            </button>
    </div>
  )
}

export default Button
