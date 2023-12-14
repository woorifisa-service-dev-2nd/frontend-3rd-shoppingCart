import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import ItemList from './ItemList';

const Cart = () => {
    const [open,setOpen]=useState(false);
    const openCart=()=>{
        setOpen(true);
    }
  return (
    <>
    <button onClick={()=>setOpen(!open)}>Cart</button>
    {open&&createPortal(<div><ItemList/></div>,document.body)}
    </>
  )
}

export default Cart