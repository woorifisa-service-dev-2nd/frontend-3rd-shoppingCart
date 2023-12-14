import React, { useState } from 'react'
// import Modal from '../ui/Modal'
import IconButton from '@/component/ui/button/IconButton'
import { createPortal } from 'react-dom'
// rafce
const CartItem = ({cart}) => {
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);
  
  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">
        <div>
            <div>
                <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{ cart.product }</h2>
            </div>
        </div>
        <div className="flex items-center gap-1">
            <IconButton icon={'추가'} onClick={openModal}/>
            <IconButton textColor='text-red-300' icon={'🗑'}/>
        </div>
    </li>
  )
}

export default CartItem