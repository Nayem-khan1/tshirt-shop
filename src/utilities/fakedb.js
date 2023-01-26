//set data

export const setToDb = id => {
    let shoppingCart = getStoredCart();
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}

// get data

export const getStoredCart = () => {
    let shoppingCart = {};
    const savedCart = localStorage.getItem('shopping-cart');
    if(savedCart){
        shoppingCart = JSON.parse(savedCart);
    }
    return shoppingCart;
}

//remove data

export const removeFromDb = (id) =>{

    const storedCart = getStoredCart();
    if(id in storedCart){
        delete storedCart[id];
    }
    localStorage.setItem('shopping-cart', JSON.stringify(storedCart));
}
