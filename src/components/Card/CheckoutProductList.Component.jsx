
export const CheckoutProductListComponent = () => {
    return(
        <>
            <div>
                <ul>
                    <li className="my-4" style={{ borderBottom:"1px solid #D9D9D9 "}}>
                        <div className="flex my-3 justify-between">
                            <div className="flex w-9/12">
                                <div style={{ height:"70px" , width:"65px"}}>
                                    <img className="w-full h-full" src="https://cdn-contents.weverseshop.io/public/shop/8a754b86519bd4a86f30b87b29ce3391.png?q=95&w=128" alt=""/>
                                </div>
                                <div className="text-left mx-3 my-auto">
                                    <p>Agust D (BTS) 'D-DAY' (Random)</p>
                                    <p style={{ color:"#bdbbbb"}}>Option : Random</p>
                                </div>
                            </div>
                            <div className="flex text-right w-3/12">
                                <div className="my-auto w-48 text-right">
                                    <p style={{ color:"#a8a6a6"}}>Quantity:1</p>
                                </div>
                                <div className="my-auto w-52 text-right">
                                    <p>$17.20</p>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}