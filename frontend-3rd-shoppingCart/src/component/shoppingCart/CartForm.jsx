import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../context/CartContext';

import CartBody from './CartBody';

const CartForm = ({isMain}) => {
  const [carts, openModal, closeModal] = useContext(CartContext);
 
  return (
    <>
            <h3 className="text-3xl text-black">Cart</h3>
            <form className='my-2'>
            <CartBody isMain={isMain}></CartBody>
            <div className='flex justify-end gap-4'>
            <button onClick={closeModal}>닫기</button>
            </div>
            </form>
        </>
  )
}

export default CartForm