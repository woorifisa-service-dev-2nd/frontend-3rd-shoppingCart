import { React, createContext, useReducer, useState } from 'react'
import CartBody from './component/shoppingCart/CartBody'
import CartForm from './component/shoppingCart/CartForm'
import { CartContext, CartDispatchContext } from './context/CartContext'
import { createPortal } from 'react-dom'
import Modal from './component/ui/Modal'
import ShoppingCart from './component/shoppingCart/Subtotal'


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
      <header>
        <div className="flex justify-center">
          <a to="/">
            <h1 className='animate-spin-slow py-8 text-black max-w-max text-7xl'>Shopping List</h1>
          </a>
        </div>
      </header>
      
        <CartContext.Provider value={[carts, openModal, closeModal]}>
          <CartDispatchContext.Provider value = {dispatch}>
          <div className='max-w-xl mx-auto min-w-[20rem]'>

            <div className='flex justify-end'>
            <button className="inline-flex items-center rounded-md text-xl font-semibold  bg-blue-600 px-5 py-2 text-white ring-1 ring-inset ring-gray-500/10" onClick={openModal}>Cart</button>
            </div>
            

              <section>
                <CartBody isMain={true}></CartBody>
              </section>
            
            {isOpen && createPortal(
              <Modal>
              <CartForm isMain={false}></CartForm>
            </Modal>, document.body)}

          </div>
          </CartDispatchContext.Provider>
        </CartContext.Provider>
    </div>
  )
}

export default App