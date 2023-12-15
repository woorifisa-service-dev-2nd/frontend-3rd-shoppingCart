import React, { useContext } from 'react'
import CartBody from '../shoppingCart/CartBody';
import Modal from '../ui/Modal';
import { createPortal } from 'react-dom';
import CartForm from '../shoppingCart/CartForm';
import { CartContext } from '../../context/CartContext';

const ShoppingBody = () => {
    const [carts, openModal, closeModal, isOpen] =  useContext(CartContext);

  return (
    <div className='max-w-xl mx-auto min-w-[20rem]'>

            <div className='flex justify-end'>
            <button className="inline-flex items-center rounded-md text-xl  bg-indigo-600 shadow-sm hover:bg-indigo-700 px-5 py-2 text-white ring-1 ring-inset ring-gray-500/10" onClick={openModal}>Cart</button>
            </div>
            

              <section>
                <CartBody isMain={true}></CartBody>
              </section>
            
            {isOpen && createPortal(
            <Modal>
              <CartForm isMain={false}></CartForm>
            </Modal>, document.body)}

          </div>
  )
}

export default ShoppingBody