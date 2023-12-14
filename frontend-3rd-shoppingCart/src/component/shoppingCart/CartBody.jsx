import React, { useContext } from 'react'
import CartItem from './CartItem';
import { CartContext } from '../../context/CartContext';
const CartBody = ({isMain}) => {
  const [carts, closeModal] = useContext(CartContext);
  // const isMain = (children) => children.startsWith('main')? true:false;
  // console.log(children);
  // console.log(children.startsWith('main'));
  console.log(isMain);
  return (
    <ul className='px-0 my-8'>
        {carts.map((cart) => (isMain || cart.state===true) && <CartItem isMain={isMain} cart={cart} key = {cart.id}></CartItem>) }
    </ul>
  )
}

export default CartBody