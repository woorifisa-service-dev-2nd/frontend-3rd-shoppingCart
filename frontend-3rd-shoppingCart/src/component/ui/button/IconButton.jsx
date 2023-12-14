import React, { useContext } from 'react'
import { CartDispatchContext } from '../../../context/CartContext'

const IconButton = ({ textColor, icon, onClick}) => {

    return (
        <button onClick={onClick}
            className={`w-8 text-xl font-semibold cursor-pointer ${textColor}`}>
            {icon}
        </button>
    )
}

export default IconButton