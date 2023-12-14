import { React, createContext, useReducer, useState } from 'react'
import CartBody from './component/shoppingCart/CartBody'
import CartForm from './component/shoppingCart/CartForm'
import { CartContext } from './context/CartContext'
import { createPortal } from 'react-dom'
import Modal from './component/ui/Modal'
import DefaultLayout from './layouts/DefaultLayout'

const dummyData = [
  {
    id: 1,
    product: 'React 공부',
    state: true,
  },
  {
    id: 2,
    product: 'React 공부',
    state: false,
  },
  {
    id: 3,
    product: 'React 공부',
    state: false,
  }
]

const reducer = (carts, action) => {
  switch (action.type){
    case 'ADD':
      return '';

    case 'UPDATE':
      return ''

    case 'DELETE':
      return ''
  }
}

const removeTodoHandler = (removeTodoId) => {
  console.log(removeTodoId);
  const removeTodos = todos.filter(todo => todo.id !== removeTodoId);
  setTodos(removeTodos);
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
        </CartContext.Provider>
    </div>
  )
}

export default App