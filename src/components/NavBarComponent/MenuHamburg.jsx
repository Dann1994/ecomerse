import React from 'react'

export const MenuHamburg = () => {
    return (
        <div className="offcanvas offcanvas-start" tabindex="-1" id="menu_side" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">Menú</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        </div>
    )
}
