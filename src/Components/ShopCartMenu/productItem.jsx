const ProductItemCart = props => {
    const  { id, title,imgUrl, price,deleteProduct } = props
    return(
        <div className="w-full h-16 flex items-center border-b-4 justify-between ">
                <figure className="w-30 h-10 ml-2">
                    <img className=" h-full rounded object-cover" src={imgUrl} alt={title} />
                </figure>
                    <span className="font-light pl-2 flex w-[130px] truncate text-auto">{title}</span>
                    <span className=" text-green-500 font-bold pl-2 ">${price}</span>
                    <span className="  font-medium pl-2 ">x1</span>

                    {/* Verifica si está definida o no, si lo está, se renderiza */}
                    {deleteProduct && <span className="  font-bold mr-2  cursor-pointer"onClick={()=> deleteProduct(id)}>x</span>} 
        </div>

            
    )
}

export default ProductItemCart