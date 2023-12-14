import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';

const Modal = ({ children }) => {
  const [carts, closeModal] = useContext(CartContext);
  return (
    <>
        <div data-cy="modal-backdrop" className='fixed top-0 left-0 w-full h-full backdrop-blur-md z-1' onClick={closeModal}></div>
        <div 
            className='fixed z-10 w-1/2 p-8 m-0 transform -translate-x-1/2 -translate-y-1/2 border-none rounded shadow-xl top-1/2 left-1/2 bg-slate-600'
        >
            { children }
        </div>
    </>
  )
}

export default Modal