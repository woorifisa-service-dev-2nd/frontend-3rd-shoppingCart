import React, { useContext, useState } from 'react'
// import Modal from '../ui/Modal'
import IconButton from '@/component/ui/button/IconButton'
import { createPortal } from 'react-dom'
import { CartDispatchContext } from '../../context/CartContext';
// rafce
const CartItem = ({isMain, cart, children}) => {
  const dispatch = useContext(CartDispatchContext);

    const addEvent = ()=>{
        dispatch({type:"ADD", addCart:{
            id: cart.id,
            product: cart.product,
            count: cart.count+1
        }})

        console.log(cart.count);
    }
    const deleteEvent = ()=>{
        dispatch({type:"DELETE", deleteCart:{
            id: cart.id,
            product: cart.product,
            count: 0
        }})

        console.log(cart.count);
    }
  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{ cart.product }</h2>
            </div>
        </div>
        <div className="flex items-center gap-1">
            {isMain && <IconButton icon={'+'} cart={cart} onClick={addEvent}/>}
            {!isMain && <IconButton textColor='text-red-300' icon={'🗑'} onClick={deleteEvent}/>}
        </div>
    </li>
  )
}

export default CartItem