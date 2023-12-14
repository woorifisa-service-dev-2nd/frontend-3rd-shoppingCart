import React, { useContext, useState } from 'react'
// import Modal from '../ui/Modal'
import IconButton from '@/component/ui/button/IconButton'
import { createPortal } from 'react-dom'
import { CartDispatchContext } from '../../context/CartContext';
import CustomNumberInput from '../ui/button/CountButton';
// rafce
const CartItem = ({ isMain, cart }) => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue((prevValue) => prevValue > 0 ? prevValue - 1 : 0);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };



  const dispatch = useContext(CartDispatchContext);

  const addEvent = () => {

    if (value === 0) {
      alert("상품을 수량을 선택해주세요")
    } else {
      dispatch({
        type: "ADD", addCart: {
          id: cart.id,
          product: cart.product,
          count: cart.count + value,

        }
      });
      alert(`상품 ${cart.product}이 추가되었습니다.`);
      setValue(0);

    }

  }
  const deleteEvent = () => {
    dispatch({
      type: "DELETE", deleteCart: {
        id: cart.id,
        product: cart.product,
        count: 0
      }
    })

    console.log(cart.count);
  }
  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-gray-700 rounded-md shadow-xl">

      <div className="flex items-center">
        <img src={cart.img} alt="" className="w-32 h-32 mr-4" />
        <h2 data-test="title" className="mb-0 text-lg font-bold text-gray-100 uppercase">{cart.product}</h2>
        <h2 className="mb-0 text-lg text-gray-100 ">{cart.price}</h2>

      </div>


      <div className="flex items-center gap-1">
        {isMain && <CustomNumberInput value={value} decrement={decrement} increment={increment}></CustomNumberInput>}
        {isMain && <IconButton icon={'추가'} onClick={addEvent} />}

        {!isMain && <div className="mb-0 text-lg font-bold text-gray-100 uppercase">{cart.count}</div>}
        {!isMain && <IconButton textColor='text-red-300' icon={'🗑'} onClick={deleteEvent} />}
      </div>
    </li>
  )
}

export default CartItem