import React, { useContext } from 'react'
import { CartDispatchContext } from '../../../context/CartContext'

const IconButton = ({ textColor, icon,  cart }) => {

    const dispatch = useContext(CartDispatchContext);

    const addEvent = ()=>{
        dispatch({type:"ADD", addCart:{
            id: cart.id,
            product: cart.product,
            count: cart.count+1
        }})

        console.log(cart.count);
    }

    return (
        <button onClick={addEvent}
            className={`w-8 text-xl font-semibold cursor-pointer ${textColor}`}>
            {icon}
        </button>
    )
}

export default IconButton