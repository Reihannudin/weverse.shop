
export const OrderViewListComponent = () => {
    return(
        <>
            <div className="w-full pb-14" style={{ background:"#F1F3F4"}}>
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="py-8" style={{  borderRadius:"12px",  background:"white"}}>
                            <div className="w-10/12 mx-auto">
                                <div className="flex justify-between">
                                    <div className="pb-6">
                                        <p>NO. PESANAN. 230406E97MD1Y9</p>
                                    </div>
                                    <div>

                                    </div>
                                </div>
                                <div className="flex px-5 ">
                                    <div style={{ width:"170px"}}>
                                        <div className="ms-auto " style={{ width:"125px" , height:"100px"}}>
                                            <img className="w-full h-full" src="/assets/status-order/status-order-done-1.svg"/>
                                        </div>
                                        <div className="text-center mx-2 w-10/12">
                                            <p style={{ fontSize:"15px"}}>Pesanan dibuat</p>
                                            <span style={{ fontSize:"14px"}}>16-04-2023 12:06</span>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="" style={{ width:"170px" , height:"100px"}}>
                                            <img className="w-full h-full" src="/assets/status-order/status-order-2.svg"/>
                                        </div>
                                        <div className="text-center mx-2 w-10/12">
                                            <p style={{ fontSize:"15px"}}>Pembayaran</p>
                                            <span style={{ fontSize:"14px"}}>16-04-2023 12:06</span>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="" style={{ width:"170px" , height:"100px"}}>
                                            <img className="w-full h-full" src="/assets/status-order/status-order-3.svg"/>
                                        </div>
                                        <div className="text-center mx-2 w-10/12">
                                            <p style={{ fontSize:"15px"}}>Pengiriman</p>
                                            <span style={{ fontSize:"14px"}}>16-04-2023 12:06</span>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="" style={{ width:"170px" , height:"100px"}}>
                                            <img className="w-full h-full" src="/assets/status-order/status-order-4.svg"/>
                                        </div>
                                        <div className="text-center mx-2 w-10/12">
                                            <p style={{ fontSize:"15px"}}>Pesanan sampai</p>
                                            <span style={{ fontSize:"14px"}}>16-04-2023 12:06</span>
                                        </div>
                                    </div>
                                    <div style={{ width:"170px"}}>
                                        <div className="me-auto " style={{ width:"125px" , height:"100px"}}>
                                            <img className="w-full h-full" src="/assets/status-order/status-order-5.svg"/>
                                        </div>
                                        <div className="text-center mx-6 w-10/12">
                                            <p style={{ fontSize:"15px"}}>Ulasan</p>
                                            <span style={{ fontSize:"14px"}}>16-04-2023 12:06</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-8 my-6" style={{  borderRadius:"12px",  background:"white"}}>
                            <div className="w-11/12 mx-auto">
                                <div className="flex justify-between">
                                    <div className=" w-6/12 me-4 text-left" style={{ borderRight:"1px solid #ebebeb"}} >
                                        <h2 style={{ fontSize:"18px"}} className="font-semibold">Shipping Address</h2>
                                        <div className="my-2 text-left">
                                            <div className="flex gap-3" style={{color:"#08CCCA"}}>
                                                <p style={{ fontSize:"18px"}}>Andrian Raihannudin</p>
                                                <p className="py-0 px-1 my-auto" style={{ border:"1px solid #08CCCA" , fontSize:"13px", borderRadius:"8px"}}>Default</p>
                                            </div>
                                            <div>
                                                <p style={{ fontSize:"15px"}}>Grand catania block O5/39, Ciakar, Panongan, Kab.Tangerang, Banten</p>
                                            </div>
                                            <div>
                                                <p>15710</p>
                                                <p>Indonesia</p>
                                                <p>+62 87773301182</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className=" w-5/12 text-right">
                                        <h2 style={{ fontSize:"18px"}} className="font-semibold">Shipping information</h2>
                                        <div className="my-0 text-right">
                                            <div className="mb-1 flex gap-2" style={{ color:"rgba(131,130,130,0.87)"}} >
                                                <div className="text-left flex gap-2">
                                                    <p>Courier:</p>
                                                </div>
                                                <div className="text-left">
                                                    <p className="font-semibold">CJ courier</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="my-1 text-right">
                                            <p className="font-semibold text-left">Status</p>
                                            <div className="flex my-1 justify-between" style={{ color:"rgba(131,130,130,0.87)"}} >
                                                <div className="text-left flex gap-2">
                                                    <i className="fa-solid fa-box my-auto"></i>
                                                    <p style={{ color:"#3ECCCD"}}>16-04-2023 12:06</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">Pesanan Dibuat</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <p style={{ fontSize:"15px"}}>Estimated Shipping</p>
                                            <p style={{ color:"rgba(131,130,130,0.87)" ,fontSize:"14px"}}>Diperkirakan akan sampai ke anda sekitar 4-5 mingguan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="py-11 my-5" style={{  borderRadius:"12px",  background:"white"}}>
                            <div className="w-9/12 text-left mx-auto">
                                <h2 style={{ fontSize:"18px"}} className="font-semibold">Your Order</h2>
                                <div>
                                    <ul>
                                        <li className="my-5 pb-8"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                            <div className="flex justify-between" >
                                                <div className="flex gap-4">
                                                    <div style={{ height:"70px" , width:"70px"}}>
                                                        <img src="https://cdn-contents.weverseshop.io/public/shop/c6e60dbc87d9db215bed26652ee71f41.jpg?q=95&w=720" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold">BE (Deluxe Edition)</h4>
                                                        <p style={{ color:"#a6a6a6"}}>Option: BE (Deluxe Edition)</p>
                                                        <p style={{ fontSize:"15px" , color:"#8f8f8f"}}>Quantity: 2</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="my-auto text-right my-2">
                                                        <p className=" font-semibold">$20.00</p>
                                                        <button className="py-1 mt-4 px-4" style={{ borderRadius:"4px",fontSize:"14px", border:"1px solid #3ECCCD" ,color:"#3ECCCD"}}>
                                                            See Order
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="my-5 pb-8"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                            <div className="flex justify-between" >
                                                <div className="flex gap-4">
                                                    <div style={{ height:"70px" , width:"70px"}}>
                                                        <img src="https://cdn-contents.weverseshop.io/public/shop/c6e60dbc87d9db215bed26652ee71f41.jpg?q=95&w=720" />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-semibold">BE (Deluxe Edition)</h4>
                                                        <p style={{ color:"#a6a6a6"}}>Option: BE (Deluxe Edition)</p>
                                                        <p style={{ fontSize:"15px" , color:"#8f8f8f"}}>Quantity: 2</p>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="my-auto text-right my-2">
                                                        <p className=" font-semibold">$20.00</p>
                                                        <button className="py-1 mt-4 px-4" style={{ borderRadius:"4px",fontSize:"14px", border:"1px solid #3ECCCD" ,color:"#3ECCCD"}}>
                                                            See Order
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div>
                                        <div className="flex my-4 justify-between" style={{ fontSize:"16px"}} >
                                            <div className="text-left">
                                                <p>Subtotal (1 item)</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">$20.00</p>
                                            </div>
                                        </div>
                                        <div className="flex my-4 justify-between" style={{ fontSize:"16px"}}>
                                            <div className="text-left">
                                                <p>Shipping Fee</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">$47.14</p>
                                            </div>
                                        </div>
                                        <div className="flex my-4 justify-between" style={{ fontSize:"16px"}}>
                                            <div className="text-left">
                                                <p>Discount (Weverse Shop Cash)</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">$0.00</p>
                                            </div>
                                        </div>
                                        <div className="flex py-3 mt-4 justify-between" style={{ background:"#f8f8f8" , border:"1px solid #f8f8f8" , fontSize:"16px"}}>
                                            <div className="text-left">
                                                <p className="font-semibold">Payment With</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-semibold">Paypal</p>
                                            </div>
                                        </div>
                                        <div className="flex py-3 mt-4 justify-between" style={{ background:"#FFFEED" , border:"1px solid #F7F6DE" , fontSize:"18px"}}>
                                            <div className="text-left">
                                                <p className="font-bold">Grand Total</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">$47.14</p>
                                            </div>
                                        </div>
                                        <div className="flex my-3 justify-between" style={{ color:"#05C46B"}} >
                                            <div className="text-left">
                                                <p >Earned Weverse Shop Cash</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="font-bold">$0.20</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-10 mb-6" style={{ color:"#ebebeb"}}/>
                                <div className="my-4" >
                                    <div className="w-full">
                                            <button className="w-full my-2 font-medium py-2.5 " style={{ color:"#40CDCC" , borderRadius:"8px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Extended Guaranteed</button>
                                            <button className="w-full my-2 font-medium py-2.5 " style={{ background:"#40CDCC" , color:"white" , borderRadius:"8px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Cancel order</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}