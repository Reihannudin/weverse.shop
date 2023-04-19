
export const CheckoutProductListComponent = (props) => {
    return(
        <>
            <div>
                <li className="my-4" style={{ borderBottom:"1px solid #D9D9D9 "}}>
                        <div className="flex my-3 justify-between">
                            <div className="flex w-9/12">
                                <div style={{ height:"70px" , width:"65px"}}>
                                    <img className="w-full h-full" src={props.image} alt=""/>
                                </div>
                                <div className="text-left mx-3 my-auto">
                                    <p>{props.name}</p>
                                    <p style={{ color:"#bdbbbb"}}>Option : Random</p>
                                </div>
                            </div>
                            <div className="flex text-right w-3/12">
                                <div className="my-auto w-48 text-right">
                                    <p style={{ color:"#a8a6a6"}}>Quantity:{props.qty}</p>
                                </div>
                                <div className="my-auto w-52 text-right">
                                    <p>${props.price}</p>
                                </div>
                            </div>
                        </div>
                    </li>
            </div>
        </>
    )
}