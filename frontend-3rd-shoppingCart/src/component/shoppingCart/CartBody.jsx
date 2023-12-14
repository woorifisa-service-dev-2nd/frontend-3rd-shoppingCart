import React, { useContext } from 'react'
import CartItem from './CartItem';
import { CartContext } from '../../context/CartContext';
const CartBody = () => {
  const carts = useContext(CartContext);
  // const dispatch = useContext(TodoDispatchContext);

  console.log(carts);
  return (
    <ul className='px-0 my-8'>
        {carts.map((cart) => <CartItem cart={cart} key = {cart.id} />) }
        
    </ul>
  )
}

export default CartBody