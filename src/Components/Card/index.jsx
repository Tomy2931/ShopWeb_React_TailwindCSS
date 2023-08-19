import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import "./style.css"

const Card = (data) => {
    const context = useContext(ShoppingCartContext)

    const showProduct = (productDetail) => {
        context.openProductDetail()
        context.setProdInfoDetail(productDetail)
        context.closeShopCart()
    }

    const addToCart =(productData) => {
        context.setCartProducts([...context.cartProducts, productData])     //Toma lo que ya hay en CartProducts y le agrega productData
        context.setCount(context.count+1) //Contador de carrito
        context.setBlockAddOrderButton(false)
    }

    const duplicadeItem = (id) => {
        const inCart = context.cartProducts.filter(product => product.id === id).length > 0
        if (inCart) {
            return(
                <img src="https://cdn-icons-png.flaticon.com/512/1949/1949617.png" 
    
                    className="absolute top-0 right-0 my-1 mx-1 p-1 flex justify-center items-center w-9 h-9 select-none opacity-10 "/>
                )
            
        } else {
            return(
                <img src="https://cdn-icons-png.flaticon.com/512/1949/1949617.png" 
    
                    className="absolute top-0 right-0 my-1 mx-1 p-1 flex justify-center items-center w-9 h-9 select-none cursor-pointer icono-agregar-carrito"
                    onClick={
                        () => {addToCart(data.data);}
                    }
                        /> 
            )
                }   
    }

    return(
        <div className="bg-slate-50  w-56 h-60 rounded-lg overflow-hidden"
            > 
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 my-1 mx-2 px-1 bg-white rounded-md text-xs" >{data.data.category.name}</span>

                <img  className="w-full h-full obj transition-transform hover:opacity-80 cursor-pointer" src={data.data.images[0]} alt={data.data.category.name} 
                onClick={ () => showProduct(data.data)}/>
                
                {duplicadeItem(data.data.id)}

            </figure>
            <p className="flex justify-between bg-slate-50 h-full">
                <span className="truncate text-auto font-light  px-2 my-2 ">{data.data.title}</span>
                <span className="text-green-600 font-bold  px-2 my-2 ">${data.data.price}</span>
               
            </p>
        </div>
    )
}



export default Card