import { useParams } from "react-router-dom"
import { NavBarComponent } from "../NavBarComponent/NavBarComponent"
import { useEffect, useState } from "react"
import { ItemListContainer } from "../ItemListContainer/ItemListContainer"
import { getProductsCategories } from "../../services"


export const Categories = () => {

    const [productos, setProductos] = useState([])
    const { id } = useParams()

    useEffect(() => {
        getProductsCategories(id)
        .then(response => {
            setProductos(response.data.products);
            console.log(response.data.products);
        })
        .catch( error => {
            console.log(error);
        })
    }, [id])

    return (
        <>
            <NavBarComponent/>
            <ItemListContainer producsData={productos}/>
        </>
    )
}
