import React from 'react'

export const CartWidget = ({ cant }) => {
    return (
        <>
            <div className='count_section'>
                <ul className='menu_items' >
                    <li>
                        <a className="bi bi-person-fill" data-bs-toggle="offcanvas" href="#cuenta_side" role="button" aria-controls="offcanvasExample">
                            <div className='carrito_cant'>{cant}</div>
                        </a>
                    </li>
                    <li>
                        <a className="bi bi-cart-fill " data-bs-toggle="offcanvas" href="#menu_carrito" role="button" aria-controls="offcanvasExample">
                            <div className='carrito_cant'>{cant}</div>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )
}
