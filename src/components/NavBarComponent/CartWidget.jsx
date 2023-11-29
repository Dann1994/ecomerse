import React from 'react'

export const CartWidget = ({ cant }) => {
    return (
        <div className='carrito_button'>
            <div>{cant}</div>
            <a class="bi bi-cart " data-bs-toggle="offcanvas" href="#menu_carrito" role="button" aria-controls="offcanvasExample"></a>
        </div>
    )
}
