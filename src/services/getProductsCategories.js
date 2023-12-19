import axios from "axios";



export const getProductsCategories = async (category) => {
    return await axios.get('https://dummyjson.com/products/category/' + category);
}
