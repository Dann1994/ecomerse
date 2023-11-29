
export const TarjetaProducto = ({precio = 0, titulo = 'Producto', img = 'https://www.idsplus.net/wp-content/uploads/default-placeholder.png'}) => {
    return (
        <>
            <div className="tarjeta_producto_container" onClick={() => console.log("Hola")}>
                <div className="tarjeta_producto_foto">
                    <img className="imagen_producto" src={img} alt="Foto_producto" />
                </div>
                <div className="tarjeta_producto_info">
                    <h2>${precio}</h2>
                    <p>{titulo}</p>
                </div>
            </div>
        </>
    )
}
