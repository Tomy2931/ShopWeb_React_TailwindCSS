import { useContext } from "react";
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context";
import OrderCards from "../../Components/OrderCards";
import { Link } from "react-router-dom";
function MyOrders() {
  
  const context = useContext(ShoppingCartContext);

  return (
    <Layout>
        <h1>My Orders</h1>   
    {
      context.orderToAdd.map((order,index) => (
  
        <Link key={index} to={`/my-orders/${index}`}> 
          <OrderCards totalPrice ={order.totalPriceOrder} 
          totalProducts ={order.totalProducts} />
        </Link>
      ))
    }
    </Layout>
    

  )
}

export default MyOrders
