import { Link } from "react-router-dom"
import { ItemCount } from "./ItemCount"

export const TarjetaProducto = ({ productInfo }) => {
    const {price, images, title, id} = productInfo
    return (
        <>
            <div className="tarjeta_producto_container" >
                <Link to={'/producto/' + id}>
                    <div className="tarjeta_producto_foto">
                        <img className="imagen_producto" src={images[0]} alt="Foto_producto" />
                        <h3 className="ver_producto">Ver Producto</h3>
                    </div>
                </Link>
                <div className="tarjeta_producto_info">
                    <h2>${price}</h2>
                    <p>{title}</p>
                    <ItemCount/>
                </div>
            </div>
        </>
    )
}
