import { NavLink } from "react-router-dom"
import "./nav.css"
import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
const Navbar = () => {
    const context = useContext(ShoppingCartContext)
    const activeStyle ="underline underline-offset-1"
    
    const carritoClick = () =>{
        context.openShopCart()
        context.closeProductDetail()
       
    }

    return(
        <nav className="nav-principal h-16 bg-red-200 absolute top-0">
            <ul className="flex items-center gap-3 px-8 ">
                <li className="font-semibold text-lg">
                <NavLink to="/">
                $hop
                    
                </NavLink>
                </li>

                <li>
                <NavLink to="/" className={({isActive }) => isActive ? activeStyle : undefined }>
                All
                    
                </NavLink>
                </li>

                <li>
                <NavLink to="/clothes " className={({isActive }) => isActive ? activeStyle : undefined }>
                Clothes
                    
                </NavLink>
                </li>

                <li>
                <NavLink to="/electronics" className={({isActive }) => isActive ? activeStyle : undefined }>
                Electronics
                    
                </NavLink>
                </li>
                <li>
                <NavLink to="/toys" className={({isActive }) => isActive ? activeStyle : undefined }>
                Toys
                    
                </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3 px-8">
                <li>
                tomas.cejas@hotmail.com
                </li>

                <li>
                <NavLink to="/my-account" className={({isActive }) => isActive ? activeStyle : undefined }>
                My account
                    
                </NavLink>
                </li>


                <li>
                <NavLink to="/my-orders" className={({isActive }) => isActive ? activeStyle : undefined }>
                My orders
                    
                </NavLink>
                </li>

                <li>
                <NavLink to="/sign-in" className={({isActive }) => isActive ? activeStyle : undefined }>
                Sign In
                    
                </NavLink>
                </li>
                <li className="cursor-pointer bg-white rounded-lg p-1"
                onClick={
                    () => carritoClick()}>
                🛒 
                <span className="text-red-500 font-medium text-lg">
                    {context.count}
                </span>
                </li>
    
            </ul>
        </nav>
    )
}

export default Navbar