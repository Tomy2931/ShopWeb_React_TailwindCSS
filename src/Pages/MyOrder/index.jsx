import { useContext } from "react"
import Layout from "../../Components/Layout"
import ProductItemCart from "../../Components/ShopCartMenu/productItem"
import { ShoppingCartContext } from "../../Context";
import { Link } from "react-router-dom";
import "./style.css" 

function MyOrder() {
  const context = useContext(ShoppingCartContext);

  const currentPath = window.location.pathname //devuelve la direccion actual

  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1) //"Recorta" el string

  if (index === 'last') index = context.orderToAdd?.length - 1

  const priceTotal = context.orderToAdd?.[index].totalPriceOrder
  // console.log(currentPath.lastIndexOf('/')+ 1); //Toma el index hasta "/" en este caso, y con +1 se toma lo que le sigue
  return (
    <Layout>
      <div className="flex w-80 justify-center  relative mb-2 ">
        <Link to="/my-orders" className="rotate-180 mr-5 h-9 cursor-pointer absolute left-0 text-green-400 icon-back-arrow">
          <span className="text-4xl">➪</span>
        </Link >
        <h1>My Order</h1>
    
      </div>
    <div className="overflow-auto z-10  w-[360px] h-[500px] flex-col pr-2 bg-red-100 rounded-t-lg  border-red-700 border-l  aside-div-container  ">
            {
                /*useContext.order?.slice(-1)[0]: Toma el ultimo elemento de order*/
                // .product.map(product => : De order, toma product
                context.orderToAdd?.[index]?.products.map(product =>(
                    <ProductItemCart 
                    key={product.id}
                    id={product.id}
                    title={product.title} 
                    imgUrl={product.images[0]} 
                    price= {product.price}
                    />   
                 ))
                }    
        </div>
        <footer className="w-[360px] h-12 bg-black flex justify-between rounded-b-lg items-center border-l border-b   border-red-700 ">
              <h2 className=" text-slate-100 ml-4 font-semibold">Precio total: </h2>
              <h2 className=" text-red-500 text-xl mr-5 font-bold"> ${priceTotal} </h2>
        </footer> 
    </Layout>
  
  )
}

export default MyOrder
