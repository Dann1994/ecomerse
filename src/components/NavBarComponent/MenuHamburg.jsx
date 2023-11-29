import React from 'react'

export const MenuHamburg = () => {
    return (
        <div class="offcanvas offcanvas-start" tabindex="-1" id="menu_side" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menú</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
    )
}
