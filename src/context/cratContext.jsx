import { useState } from "react";
import { createContext } from "react"

export const cardContext = createContext();

export const CartProvider = ({children}) => {

    const [ count, setCount ] = useState(0)

    return (
        <cardContext.Provider value={{count}}>
            {children}
        </cardContext.Provider>
    )
};

