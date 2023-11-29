import logo from './logo_free_market.png';
import { CarritoSideBar } from './CarritoSideBar';
import { MenuHamburg } from './MenuHamburg';
import { CartWidget } from './CartWidget';


export const NavBarComponent = () => {
    return (
        <>
            <header>
                <nav>
                    <div className="nav_contenederdor">
                        <div className="grid_item grid_logo">
                            <img src={logo} alt=""/>
                        </div>
                        <div className="grid_item grid_buscador">
                            <div className="buscador_grupo">
                                <input type="text" placeholder="Buscar porductos, marcas y mas..."/>
                                <i class="bi bi-search"></i>
                            </div>
                        </div>
                        <div className="grid_item grid_navegar" >
                            <ul>
                                <li><a href="">Categorías</a></li>
                                <li><a href="">Ofertas</a></li>
                                <li><a href="">Historial</a></li>
                                <li><a href="">Supermercado</a></li>
                                <li><a href="">Moda</a></li>
                                <li><a href="">Vender</a></li>
                                <li><a href="">Ayuda</a></li>
                            </ul>
                        </div>
                        <div className="grid_item grid_cuenta">
                            <ul>
                                <li><a href="">Crear cuenta</a></li>
                                <li><a href="">Ingresá</a></li>
                                <li><a href="">Mis compras</a> </li>
                            </ul>
                            <CartWidget cant={5} />
                        </div>

                        <div className="grid_menu">
                            <a class="bi bi-list" data-bs-toggle="offcanvas" href="#menu_side" role="button" aria-controls="offcanvasExample"></a>
                            <a class="bi bi-cart" data-bs-toggle="offcanvas" href="#menu_carrito" role="button" aria-controls="offcanvasExample"></a>
                        </div>
                        <CarritoSideBar/>
                        <MenuHamburg/>
                    </div>
                </nav>
            </header>
        </>
    )
}
