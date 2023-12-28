
import { Link } from "react-router-dom"
import { TarjetaProducto } from "../TarjetaProducto"

export const ItemListContainer = ({ producsData }) => {

    return (
        <div className="tarjetas_continer">
            {
                producsData.map(product => {
                    return(
                        <div key={product.id}>
                            <TarjetaProducto productInfo={product}/>
                        </div>
                    )
                })
            }
        </div>
    )
}
