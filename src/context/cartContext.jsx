import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [ count, setCount ] = useState(0);

    const handleAdd = () => setCount(count + 1)

    const handleRemove = () => {
        const value = Math.max( 0, count - 1)
        setCount(value)
    }

    return <CartContext.Provider value={{
        count,
        setCount,
        handleAdd, 
        handleRemove
    }}>{children}</CartContext.Provider>;
    
};

