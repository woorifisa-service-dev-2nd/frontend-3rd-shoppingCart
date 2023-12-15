import React from 'react'

const ShoppingHeader = () => {
  return (
    <header>
        <div className="flex justify-center">
          <a to="/">
            <h1 className='animate-spin-slow py-8 text-black max-w-max text-7xl'>Shopping List</h1>
          </a>
        </div>
      </header>
  )
}

export default ShoppingHeader