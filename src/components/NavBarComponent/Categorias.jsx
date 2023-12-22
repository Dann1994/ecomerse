import { Link } from "react-router-dom"

export const Categorias = ({ categorias }) => {
    return (
        <div className="dropdown">
            <a className=" dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                {
                    categorias.map( categoria => 
                        <li key={categoria}> <Link to={'/Categorias/' + categoria}>{categoria}</Link></li>
                    )  
                }
            </ul>
        </div>
    )
}
