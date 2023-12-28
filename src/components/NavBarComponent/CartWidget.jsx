import React, { useContext } from 'react'
import { CartContext } from '../../context/cartContext';


export const CartWidget = () => {

    const { count } = useContext(CartContext);

    return (
        <>
            <div className='count_section'>
                <ul className='menu_items' >
                    <li>
                        <a className="bi bi-person-fill" data-bs-toggle="offcanvas" href="#cuenta_side" role="button" aria-controls="offcanvasExample">
                            <div className='carrito_cant'>{count}</div>
                        </a>
                    </li>
                    <li>
                        <a className="bi bi-cart-fill " data-bs-toggle="offcanvas" href="#menu_carrito" role="button" aria-controls="offcanvasExample">
                            <div className='carrito_cant'>{count}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
