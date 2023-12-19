import React, { useEffect, useState } from 'react'
import { NavBarComponent } from '../NavBarComponent/NavBarComponent'
import { getProducts } from '../../services';
import { ItemListContainer } from '../ItemListContainer/ItemListContainer';




export const Home = () => {
    const [productos, setProductos] = useState([])

    useEffect(() => {
        getProducts()
        .then(response => {
            setProductos(response.data.products);
            console.log(response.data.products);
        })
        .catch( error => {
            console.log(error);
        })
    }, [])

    
    return (
        <>
            <NavBarComponent/>
            <ItemListContainer producsData={productos}/>
        </>
    )
}
