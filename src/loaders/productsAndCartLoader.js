import { getStoredCart } from "../utilities/fakedb";

export const productAndCartLoaders = async() => {
    const productsData = await fetch('tshirt.json');
    const products = await productsData.json();
    
    const storedCart = getStoredCart()
    const initialCart = [];
    for(const id in storedCart){
        const savedCart = products.find(product => product._id === id )
        const quantity = storedCart[id];
        savedCart.quantity = quantity;
        initialCart.push(savedCart);
    }
    return {initialCart: initialCart};
}