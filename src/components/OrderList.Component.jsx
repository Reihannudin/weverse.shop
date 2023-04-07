import {CartCardComponent} from "./Card/CartCard.Component";


export const OrderListComponent = () => {
    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 ">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>My Orders</h2>
                            </div>

                        </div>
                        <div className="flex pb-8 justify-between">
                            <div className=" my-auto">
                                <h2 className="font-regular my-auto py-0" style={{ fontSize:"16x"}}>Product Types & Status</h2>
                            </div>
                            <div className=" my-auto">
                                <button className="px-2 gap-1 flex my-auto py-1 " style={{  fontSize:"16px", borderRadius:"6px" , color:"#464646"}}>
                                   <i className="fa-solid my-auto fa-filter"></i>
                                    <p className="my-auto">All</p>
                                </button>
                            </div>
                        </div>
                        <div>
                            <div className="py-44">
                                <h2 className="text-center" style={{ color:"#bdbdbd"}}>No Orders</h2>
                                <button className="w-2/12 my-4 font-medium py-3 " style={{ color:"#40CDCC" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Shop Now</button>
                            </div>
                            {/*<div>*/}
                            {/*    <ul>*/}
                            {/*        <li>*/}
                            {/*            /!*<CartCardComponent />*!/*/}
                            {/*        </li>*/}
                            {/*    </ul>*/}
                            {/*</div>*/}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}