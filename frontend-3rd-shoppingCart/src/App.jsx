import { React, useReducer, useState } from 'react'

import { CartContext, CartDispatchContext } from './context/CartContext'

import ShoppingHeader from './component/main/ShoppingHeader'
import ShoppingBody from './component/main/ShoppingBody'


const dummyData = [
  {
    id: 1,
    product: '가방',
    count: 0,
    price: "50000",
    img: "/img/free-icon-bag-3534513.png"
  },
  {
    id: 2,
    product: '안경',
    count: 0,
    price: "10000",
    img: "/img/free-icon-eyeglasses-149456.png"
  },
  {
    id: 3,
    product: '우산',
    count: 0,
    price: "5000",
    img: "/img/free-icon-umbrella-949816.png"
  }
]

const reducer = (carts, action) => {
  switch (action.type){
    case 'ADD':
      const addCarts = carts.map((data)=> data.id=== action.addCart.id ? action.addCart : data);
      
      return addCarts;

    case 'DELETE':
      const deleteCarts = carts.map((data)=> data.id=== action.deleteCart.id ? action.deleteCart : data);
      
      return deleteCarts;
  }
}



const App = () => {
  const [carts, dispatch] = useReducer(reducer, dummyData);
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);

  return (
    <div>
      <ShoppingHeader/>
      
        <CartContext.Provider value={[carts, openModal, closeModal, isOpen]}>
          <CartDispatchContext.Provider value = {dispatch}>
          <ShoppingBody/>
          </CartDispatchContext.Provider>
        </CartContext.Provider>
    </div>
  )
}

export default App