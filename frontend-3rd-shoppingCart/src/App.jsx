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
    state: false,
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

const App = () => {
  const [carts, dispatch] = useReducer(reducer, dummyData);
  const [isOpen, open] = useState(false);
  const openModal = () => open(true);
  const closeModal = () => open(false);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App