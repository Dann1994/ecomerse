import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Categories } from "../pages/Categories";
import { Item } from "../pages/Item";

export const MainRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Categorias/:id" element={<Categories/>} />
                <Route path="/Producto/:id" element={<Item/>} />
            </Routes>
        </BrowserRouter>
    )
}
