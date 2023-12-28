import logo from './logo_free_market.png';
import { CarritoSideBar } from './CarritoSideBar';
import { MenuHamburg } from './MenuHamburg';
import { CartWidget } from './CartWidget';
import { MenuCuenta } from './MenuCuenta';
import { Categorias } from './Categorias';
import { useEffect, useState } from 'react';
import { getCategories } from "../../services";
import { Link } from 'react-router-dom';


export const NavBarComponent = () => {

    const [ categorias, setCategorias ] = useState([])


    useEffect(() => {
        getCategories()
        .then(response => {
            setCategorias(response.data);
        })
        .catch( error => {
            console.log(error);
        })
    }, [])

    return (
        <>
            <header>
                <nav>
                    <div className="nav_contenederdor">
                        <div className="grid_item grid_logo">
                            <Link to={'/'}><img src={logo} alt=""/></Link>
                        </div>
                        <div className="grid_item grid_buscador">
                            <div className="buscador_grupo">
                                <input type="text" placeholder="Buscar porductos, marcas y mas..."/>
                                <i className="bi bi-search"></i>
                            </div>
                        </div>
                        <div className="grid_item grid_navegar" >

                            <ul className='menu_items'>
                                <li>
                                    <Categorias categorias={categorias}/>
                                </li>
                                <li><Link to={'/'}>Inicio</Link></li>
                                <li><a href="">Garantía</a></li>
                                <li><a href="">Ayuda</a></li>
                                <li><a href="">Contacto</a></li>
                                
                            </ul>
                        </div>
                        <div className="grid_item grid_cuenta">    
                            <CartWidget />
                        </div>
                        <div className="grid_menu">
                            <a className="bi bi-list" data-bs-toggle="offcanvas" href="#menu_side" role="button" aria-controls="offcanvasExample"></a>
                            <a className="bi bi-cart" data-bs-toggle="offcanvas" href="#menu_carrito" role="button" aria-controls="offcanvasExample"></a>
                        </div>
                        <CarritoSideBar/>
                        <MenuHamburg/>
                        <MenuCuenta/>
                    </div>
                </nav>
            </header>
        </>
    )
}
