import React from 'react'

import CartBody from './CartBody';
import Subtotal from './Subtotal';

const CartForm = ({isMain}) => {
  
 
  return (
    <>
            <h3 className="text-3xl text-black">Cart</h3>
            <form className='my-2'>
            <CartBody isMain={isMain}></CartBody>
            <Subtotal/>
            <div className='flex justify-end gap-4'>
            
            </div>
            </form>
        </>
  )
}

export default CartForm