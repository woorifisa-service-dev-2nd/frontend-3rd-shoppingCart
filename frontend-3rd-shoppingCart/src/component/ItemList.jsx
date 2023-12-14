import React from 'react'

const ItemList = () => {
    const dummyList = [
        {
            id: 1,
            name: "car"
        },
        {
            id: 2,
            name: "coat"
        },
        {
            id: 3,
            name: "ring"
        }
    ]
    return (
        <div>
            <ul className='px-0 my-8'>
                {dummyList.map((dum) => <div>{dum.name}
                    <button>add</button></div>
                )}
            </ul>

        </div>
    )
}

export default ItemList