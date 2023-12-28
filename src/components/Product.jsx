import React from 'react'

export const Product = ({ productInfo }) => {
    const {price, images, title, description} = productInfo 
    return (
        <div className='product_datail_container'>
            { images &&
                <div className='product_foto_section'> 
                    <div>
                        <img className="imagen_producto" src={images[0]} alt="Foto_producto" />
                    </div>
                </div>
            }
            <div className='product_info_section'>
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>${price}</h3>
                <div className='add_cart'>
                    <div className='count_continer'>
                        <button>-</button>
                        0
                        <button>+</button>
                    </div>
                    <button>Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}
