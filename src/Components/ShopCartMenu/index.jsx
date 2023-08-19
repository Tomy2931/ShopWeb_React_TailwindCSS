import { useContext } from "react"
import { Link } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import {totalPrice} from "../../Utils/index"
import ProductItemCart from "./productItem"
import "./style.css"
const ShopCartMenu = () => {

    const context = useContext(ShoppingCartContext);

    const deleteProduct =(id) => {
        const filterProducts = context.cartProducts.filter(product => product.id != id)//Devuelve todos los productos diferentes al ID ingresado
        context.setCartProducts(filterProducts)
        context.setCount(context.count-1)

        //Disable Listo button 
        if (context.count-1<1){ 
            context.setBlockAddOrderButton(true) }
}
    const addOrderButton =()=>{
        if (context.count>0){
            const addOrder = {
                date: '01.03.2035',
                products: context.cartProducts,
                totalProducts:context.count,
                totalPriceOrder: totalPrice(context.cartProducts),               
            }

            //Se agrega a las ordenes
            context.setOrderToAdd([... context.orderToAdd, addOrder])

            //Se borra el contenido del menu del carrito
            context.setCartProducts([])

            //Contador carrito a 0
            context.setCount(0)

            //Se bloquea el boton de "listo"
            context.setBlockAddOrderButton(true)

            //Se cierra el menu de carrito
            context.closeShopCart()
        } 
    }


    return(
    //    <aside className="absolute top-12 right-1 ">
       <aside className={`${context.shopCartOpen ? 'flex' : 'hidden'} flex-col absolute top-12 right-1 z-50 `}>
           <div className="flex justify-between bg-red-500  items-center rounded-tl-lg rounded-tr-lg">
               <h2 className="px-2 py-1 font-medium ">My order 🎁</h2>
               <h2 className="px-2 py-1 font-medium ">{context.count} Producto/s </h2>

               <div className="px-2 py-1 cursor-pointer select-none"
               onClick={context.closeShopCart}
               >✖</div>
           </div>
        <div className="overflow-auto z-10  w-[360px] h-[calc(50vh-68px)] flex-col  bg-white border border-black aside-div-container ">
            {
                context.cartProducts.map(product =>(
                    
                    <ProductItemCart 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imgUrl={product.images[0]} 
                    price= {product.price}
                    deleteProduct={deleteProduct} //Se le envia como prop
                    
                    />   
                 ) )
                }
                
        </div>
            <footer className="flex bg-red-500 rounded-bl-lg rounded-br-lg justify-between items-center">
            <span className="flex px-2 py-1 font-medium ">
                Monto: ${totalPrice(context.cartProducts)}</span>
                <Link to="/my-orders/last">
                <button onClick={()=>addOrderButton()} className={`${context.blockAddOrderButton ? "footer-button-disabled" : "" } footer-button-listo mr-5 font-bold  bg-white rounded-lg w-20 h-6.2 text-center flex items-center justify-center cursor-pointer`}>Listo</button>
                </Link>
            </footer>
       </aside> 
    )
}

export default ShopCartMenu