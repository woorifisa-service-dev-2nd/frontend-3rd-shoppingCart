import React, {  useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Subtotal = () => {
  const [carts, openModal, closeModal] = useContext(CartContext);

  const calculateSubtotal = () => {
    return carts.reduce((total, item) => total + item.price * item.count, 0);
  };

  return (
    
    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
    <div className="flex justify-between text-base font-medium text-gray-900">
      <p>Order Total</p>
      <p>{`${calculateSubtotal().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}</p>
    </div>
    <div className="mt-6">
      <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
    </div>
    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
      <p>
        
        <button type="button" onClick={closeModal} className="font-medium text-indigo-600 hover:text-indigo-500">
          Continue Shopping
          <span aria-hidden="true"> &rarr;</span>
        </button>
      </p>
    </div>
  </div>
  );
};

export default Subtotal;