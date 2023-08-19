export const totalPrice = (products) =>{
    let monto = 0
    
    products.forEach(product => { monto += product.price });

    return monto
}