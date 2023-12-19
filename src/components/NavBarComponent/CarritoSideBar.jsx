import { ItemListContainer } from "../ItemListContainer/ItemListContainer"

export const CarritoSideBar = () => {
    return (
        <div class="offcanvas offcanvas-end" tabindex="-1" id="menu_carrito" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Carrito</h5>
            </div>
        </div>
    )
}
