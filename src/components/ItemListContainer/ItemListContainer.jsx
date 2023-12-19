
import { Link } from "react-router-dom"
import { TarjetaProducto } from "../TarjetaProducto"

export const ItemListContainer = ({ producsData }) => {

    return (
        <div className="tarjetas_continer">
            {
                producsData.map(product => {
                    return(
                        <div key={product}>
                            <Link to={'/producto/' + product.id}>
                                <TarjetaProducto productInfo={product}/>
                            </Link>  
                        </div>
                    )
                })
            }
        </div>
    )
}
