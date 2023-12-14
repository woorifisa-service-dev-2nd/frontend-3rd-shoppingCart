import { React, createContext, useReducer, useState } from 'react'
import CartBody from './component/shoppingCart/CartBody'
import CartForm from './component/shoppingCart/CartForm'
import { CartContext, CartDispatchContext } from './context/CartContext'
import { createPortal } from 'react-dom'
import Modal from './component/ui/Modal'
import DefaultLayout from './layouts/DefaultLayout'

const dummyData = [
  {
    id: 1,
    product: '가방',
    count: 1,
    price: "10000원",
    img: "/img/free-icon-bag-3534513.png"
  },
  {
    id: 2,
    product: '안경',
    count: 0,
    price: "10000원",
    img: "/img/free-icon-eyeglasses-149456.png"
  },
  {
    id: 3,
    product: '우산',
    count: 0,
    price: "10000원",
    img: "/img/free-icon-umbrella-949816.png"
  }
]

const reducer = (carts, action) => {
  switch (action.type) {
    case 'ADD':
      const addCarts = carts.map((data) => data.id === action.addCart.id ? action.addCart : data);

      return addCarts;

    case 'DELETE':
      const deleteCarts = carts.map((data) => data.id === action.deleteCart.id ? action.deleteCart : data);

      return deleteCarts;
  }
}

const removeTodoHandler = (removeTodoId) => {
  console.log(removeTodoId);
  const removeTodos = todos.filter(todo => todo.id !== removeTodoId);
  setTodos(removeTodos);
}

const addHandler = (addCart) => {
  const addCarts = carts.map((data) => data.id === addCart.id ? addCart : data);

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
            <h1 className='py-8 text-red-200 max-w-max text-7xl'>Carts</h1>
          </a>
        </div>
      </header>

      <CartContext.Provider value={[carts, openModal, closeModal]}>
        <CartDispatchContext.Provider value={dispatch}>
          <div>
            <button onClick={openModal}>장바구니</button>
          </div>
          <div>
            <section>
              <CartBody isMain={true}></CartBody>
            </section>
          </div>
          {isOpen && createPortal(
            <Modal>
              <CartForm isMain={false}></CartForm>
            </Modal>, document.body)}
        </CartDispatchContext.Provider>
      </CartContext.Provider>
    </div>
  )
}

export default App