
export const TarjetaProducto = ({ productInfo }) => {
    const {price, images, title} = productInfo
    return (
        <>
            <div className="tarjeta_producto_container" >
                <div className="tarjeta_producto_foto">
                    <img className="imagen_producto" src={images[0]} alt="Foto_producto" />
                </div>
                <h3>Ver Producto</h3>
                <div className="tarjeta_producto_info">
                    <h2>${price}</h2>
                    <p>{title}</p>
                </div>
            </div>
        </>
    )
}
