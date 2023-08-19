import calendarIcon from "./calendar.png"
import arrowIcon from "./right-arrow.png"
import "./style.css"

const OrderCards = props => {
    const  { totalPrice, totalProducts } = props
    return(
        <div className=" div-principal h-[100px] flex justify-center items-center border-4 w-[400px] bg-white rounded-sm cursor-default mb-2 relative">

            <div className="flex font-semibold justify-between w-full">

                <div className="flex flex-col justify ml-5">

                    <div className="flex mb-3 ">
                        <img src={calendarIcon} alt="calendar icon" className="w-6 h-6 mr-2 " />
                        <span className="text-lg">01/02/2023</span>
                    </div>

                    <span className="text-red-600 text-lg">{totalProducts} Producto/s </span>
                    
                </div>
            </div>
                <span className=" text-3xl mr-5 text-green-500 font-semibold  ">${totalPrice} </span>
                <img src={arrowIcon} alt="calendar icon" className="w-6 h-6 mr-2 cursor-pointer arrowRight" />
        </div>

            
    )
}

export default OrderCards