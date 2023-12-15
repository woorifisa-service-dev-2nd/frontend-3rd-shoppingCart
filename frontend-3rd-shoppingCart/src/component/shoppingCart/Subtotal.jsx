import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const Subtotal = () => {
  const [carts, openModal, closeModal] = useContext(CartContext);

  const calculateSubtotal = () => {
    return carts.reduce((total, item) => total + item.price * item.count, 0);
  };
  return (
    <div>
      <p>Subtotal: {calculateSubtotal()}원</p>
    </div>
  );
};

export default Subtotal;