import React from 'react'
import { TarjetaProducto } from './TarjetaProducto'


export const Carrusel = () => {
    return (
        <div className='carrusel_container'>
                <TarjetaProducto precio={100.99} titulo={'Cargador universal'} img={'https://http2.mlstatic.com/D_NQ_NP_794273-MLU70980430863_082023-O.webp'}/>
                <TarjetaProducto precio={100.99} titulo={'Cargador universal'} img={'https://http2.mlstatic.com/D_NQ_NP_794273-MLU70980430863_082023-O.webp'}/>
                <TarjetaProducto precio={100.99} titulo={'Cargador universal'} img={'https://http2.mlstatic.com/D_NQ_NP_794273-MLU70980430863_082023-O.webp'}/>
                <TarjetaProducto precio={100.99} titulo={'Cargador universal'} img={'https://http2.mlstatic.com/D_NQ_NP_794273-MLU70980430863_082023-O.webp'}/>
                <TarjetaProducto precio={100.99} titulo={'Cargador universal'} img={'https://http2.mlstatic.com/D_NQ_NP_794273-MLU70980430863_082023-O.webp'}/>
                <TarjetaProducto precio={100.99} titulo={'Cargador universal'} img={'https://http2.mlstatic.com/D_NQ_NP_794273-MLU70980430863_082023-O.webp'}/>
        </div>
    )
}
