import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"

const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);
   
    

    return(
        <aside className= {`${context.prodDetOpen ? 'flex' : 'hidden'}
         overflow-auto  top-[68px] w-[360px] h-[calc(100vh-68px)] flex-col fixed bg-white right-0 border border-black rounded-lg`}>
            <div className="flex justify-between bg-slate-400 rounded-tl-lg rounded-tr-lg items-center ">

                <h2 className="px-2 py-1 font-medium "
                >Detail</h2>

                <div className="px-2 py-1 cursor-pointer select-none"
                onClick={context.closeProductDetail}
                >✖</div>
            </div>
            <figure>
                <img className="w-full" src={context.prodInfoDetail.images[0]} alt="" />
            </figure>
            <p className=" flex flex-col text-start ml-3 mt-4 ">
                <span className=" text-green-500 text-xl font-bold pb-1 ">${context.prodInfoDetail.price}</span>
                <span className="font-bold mb-2">{context.prodInfoDetail.title}</span>
                <span className="">{context.prodInfoDetail.description}.</span>
              
            </p>
        </aside>


    )
}

export default ProductDetail