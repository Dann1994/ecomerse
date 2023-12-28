import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { NavBarComponent } from '../NavBarComponent/NavBarComponent'
import { getProduct } from '../../services';
import { Product } from '../Product';

export const Item = () => {
    const { id } = useParams();

    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProduct(id)
        .then(response => {
            setProducto(response.data);
        })
        .catch( error => {
            console.log(error);
        })
    }, [id])
    
    return (
        <>
            <NavBarComponent/>
            <Product productInfo={producto}/>
        </>
    )
}
