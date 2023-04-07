import {CartCardComponent} from "./Card/CartCard.Component";


export const CartListComponent = () => {
    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 justify-between">
                    <div className=" my-auto">
                        <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Cart</h2>
                    </div>
                    <div className=" my-auto">
                        <button className="px-2 my-auto py-1 " style={{ border:"1px solid #afafaf" , fontSize:"14px", borderRadius:"6px" , color:"#afafaf"}}>
                            Remove sold out
                        </button>
                    </div>
                </div>
                        <div>
                            <div className="text-left" style={{ borderBottom:"1px solid #ebebeb"}}>
                                <div className="flex py-5 gap-2.5">
                                    <input className="cursor-pointer" style={{width:"22px" , color:"#05DCB5" , background:"#05DCB5"}} type="radio" />
                                    <p>Select all items</p>
                                </div>
                            </div>
                            {/*<div className="my-14">*/}
                            {/*    <h2 className="text-center" style={{ color:"#ebebeb"}}>Add Product to Cart</h2>*/}
                            {/*</div>*/}
                            <div>
                                <ul>
                                    <li>
                                        <CartCardComponent />
                                    </li>
                                </ul>
                            </div>
                            <div className="py-6" style={{ background:"#FFFEED" , borderTop:"1px solid #ebebeb"}}>
                                <div className="flex mx-8 justify-between">
                                    <div className="my-auto">
                                        <h2 className="my-auto font-bold" style={{ fontSize:"20px"}}>Total (1 item)</h2>
                                    </div>
                                    <div className="flex gap-6">
                                        <h2 className="my-auto font-bold" style={{ fontSize:"20px"}}>$16.72</h2>
                                        <button className="w-full font-medium px-8 py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"14px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Check Out</button>
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