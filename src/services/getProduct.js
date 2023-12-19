import axios from "axios";



export const getProduct = async (id) => {
    return await axios.get('https://dummyjson.com/products/' + id);
}
