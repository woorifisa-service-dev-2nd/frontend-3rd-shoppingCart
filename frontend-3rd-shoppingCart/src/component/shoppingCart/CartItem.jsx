import React, { useContext, useState } from 'react'

import IconButton from '@/component/ui/button/IconButton'

import { CartDispatchContext } from '../../context/CartContext';
import CustomNumberInput from '../ui/button/CountButton';
// rafce
const CartItem = ({isMain, cart}) => {
  const [value, setValue] = useState(0);

  const decrement = () => {
    setValue((prevValue) => prevValue > 0 ? prevValue - 1 : 0);
  };

  const increment = () => {
    setValue((prevValue) => prevValue + 1);
  };
  


  const dispatch = useContext(CartDispatchContext);

    const addEvent = ()=>{
      if(value === 0){
        alert('수량을 추가해주세요');
      }
      else{
        dispatch({type:"ADD", addCart:{
            id: cart.id,
            product: cart.product,
            count: cart.count+value,
            price: cart.price,
            img: cart.img
        }});

        setValue(0);

        alert(`상품 ${cart.product}이 추가되었습니다.`);
      }

    }
    const deleteEvent = ()=>{
        dispatch({type:"DELETE", deleteCart:{
            id: cart.id,
            product: cart.product,
            count: 0,
            price: cart.price,
            img: cart.img
        }})

        console.log(cart.count);
    }
  return (
    <li className="flex gap-4 justify-between my-4 py-4 px-4 border-[1px] bg-white rounded-md shadow-xl">
        
        <div className="flex items-center">
              <img src={cart.img} alt="" className="w-32 h-32 mr-4" />
          <div>
            <h2 data-test="title" className="mb-0 text-lg font-bold text-black uppercase">{cart.product}</h2>
            <p className="mb-0 text-lg text-black">{cart.price}원</p>
          </div>
        </div>
            
        
        <div className="flex items-center gap-1">
            {isMain && <CustomNumberInput value={value} decrement={decrement} increment={increment}></CustomNumberInput>}
            {isMain && <IconButton icon={'🛒'} onClick={addEvent}/>}

            {!isMain && <div className="mb-0 text-lg font-bold text-black uppercase">{cart.count}</div>}
            {!isMain && <IconButton textColor='text-red-300' icon={'🗑'} onClick={deleteEvent}/>}
        </div>
    </li>
  )
}

export default CartItem