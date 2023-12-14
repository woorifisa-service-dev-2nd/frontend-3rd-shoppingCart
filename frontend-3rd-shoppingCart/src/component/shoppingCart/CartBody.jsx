import React, { useContext } from 'react'
import CartItem from './CartItem';
import { CartContext } from '../../context/CartContext';
const CartBody = ({isMain}) => {
  const [carts] = useContext(CartContext);
  
  console.log(isMain);
  return (
    <ul className='px-0 my-8'>
        {carts.map((cart) => (isMain || cart.count>=1) && <CartItem isMain={isMain} cart={cart} key = {cart.id}></CartItem>) }
    </ul>
  )
}

export default CartBody