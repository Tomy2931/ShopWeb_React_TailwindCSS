import React from "react";
import { createContext,useState } from "react";


export const ShoppingCartContext = React.createContext();



export const ShoppingCartProvider = ({children}) => {
    const [count, setCount] = useState(0)


    //Open Close Product Detail
    const [prodDetOpen, setProdDetOpen] = useState(false)
    const openProductDetail = () =>setProdDetOpen(true)
    const closeProductDetail = () =>setProdDetOpen(false)

    //Open Close Shop Cart Menu
    const [shopCartOpen, setShopCartOpen] = useState(false)
    const openShopCart = () =>setShopCartOpen(true)
    const closeShopCart = () =>setShopCartOpen(false)
    
    //Icono agregar al carrito
    const [iconPlus, setIconPlus] = useState(false)
    const hideIcon = () =>setIconPlus(true)
    const showIcon = () =>setIconPlus(false)

    //Detalle del producto
    const [prodInfoDetail, setProdInfoDetail] = useState({title:"",
    price:"",
    description:"",
    images: [],})


    //Agregar productos
    const [cartProducts, setCartProducts] = useState([])

    //Agregar compra
    const [orderToAdd, setOrderToAdd] = useState([])

    //Bloquear boton agregar compra
    const [blockAddOrderButton, setBlockAddOrderButton] = useState(true)
  
    return (
      <ShoppingCartContext.Provider value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        prodDetOpen,
        setProdDetOpen,
        prodInfoDetail, 
        setProdInfoDetail,
        cartProducts,
        setCartProducts,
        shopCartOpen,
        setShopCartOpen,
        openShopCart,
        closeShopCart,
        orderToAdd,
        setOrderToAdd,
        blockAddOrderButton, 
        setBlockAddOrderButton
      }}>
        {children}
      </ShoppingCartContext.Provider>
    )
  }

