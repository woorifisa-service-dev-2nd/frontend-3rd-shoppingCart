import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';

const CartForm = () => {
  const carts = useContext(CartContext);
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);
  return (
    <>
            <h3 className="text-3xl text-red-600">Cart</h3>
            <form className='my-2'>
                <div>
                    <label className='block mb-2 text-xl text-white' htmlFor='title'>{ carts.product }</label>
                    <div className='w-full p-2 border-[1px] border-gray-300 bg-gray-200 text-gray-900 rounded' 
                           type='text' id='product' value={carts.product}/>
                </div>
                
                <div className='flex justify-end gap-4'>
                <button onClick={closeModal}>닫기</button>
                </div>
            </form>
        </>
  )
}

export default CartForm