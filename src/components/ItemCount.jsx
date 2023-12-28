import React, { useContext, useState } from 'react'
import { CartContext } from '../context/cartContext';
import StartToastifyInstance from 'toastify-js';


export const ItemCount = () => {

    const { setCount, count } = useContext(CartContext);
    const [ countItem, setCountItem ] = useState(0);

    const handleAdd = () => {
        const value = countItem + 1;
        setCountItem(value);
    }

    const handleRemove = () => {
        const value = Math.max(0, countItem - 1);
        setCountItem(value);
    }

    const handleInCart = () => {
        if ( countItem > 0) {
            setCount(count + countItem);
            StartToastifyInstance({
                text: countItem + " Agregado/s al carrito",
                duration: 3000,
                backgroundColor: '#b656ee'
            }).showToast();

            setCountItem(0);
        }
    }

    return (
        <>
            <div className='item_count'>
                <button onClick={handleRemove}>-</button>
                    <span>{countItem}</span>
                <button onClick={handleAdd} >+</button>
            </div>
            <div className="add_to_cart">
                <button onClick={handleInCart}>
                    Agregar al carrito
                </button>
            </div>
        </>
    )
}
