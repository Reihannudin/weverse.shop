import {CartCardComponent} from "./Card/CartCard.Component";
import {OrderCardComponent} from "./Card/OrderCard.Component";
import SupportListCardComponent from "./SupportListCard.Component";
import React from "react";


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
                            {/*<div className="py-28">*/}
                            {/*    <h2 className="text-center" style={{ color:"#bdbdbd"}}>No Orders</h2>*/}
                            {/*    <button className="w-2/12 my-4 font-medium py-3 " style={{ color:"#40CDCC" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Shop Now</button>*/}
                            {/*</div>*/}
                            <div className="pb-14">
                                <div className="mb-4 border-b pb-4 border-gray-200 dark:border-gray-700">
                                    <ul className="flex flex-wrap mx-auto -mb-px text-sm font-medium text-center" id="myTab"
                                        data-tabs-toggle="#myTabContent" role="tablist">
                                        <li className80 role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className=" inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700 rounded-l-lg"
                                                id="all-tab" data-tabs-target="#all" type="button"
                                                role="tab" aria-controls="profile" aria-selected="false">All
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                                id="shipping-tab" data-tabs-target="#shipping" type="button"
                                                role="tab" aria-controls="dashboard" aria-selected="false">Packing
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                                id="return-tab" data-tabs-target="#return" type="button" role="tab"
                                                aria-controls="settings" aria-selected="false">Shipping
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                                id="order-tab" data-tabs-target="#order" type="button" role="tab"
                                                aria-controls="contacts" aria-selected="false">Successful
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                                id="membership-tab" data-tabs-target="#membership" type="button" role="tab"
                                                aria-controls="settings" aria-selected="false">Cancel
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                                id="service-tab" data-tabs-target="#service" type="button" role="tab"
                                                aria-controls="settings" aria-selected="false">Not pay
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                                <div id="myTabContent">
                                    <div className="hidden " id="all"
                                         role="tabpanel" aria-labelledby="all-tab">
                                        <ul>
                                            <li>
                                                <OrderCardComponent />
                                            </li>
                                            <li>
                                                <OrderCardComponent />
                                            </li>
                                            <li>
                                                <OrderCardComponent />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden " id="shipping"
                                         role="tabpanel" aria-labelledby="shipping-tab">
                                        <ul>
                                            <li>
                                                <OrderCardComponent />
                                            </li>
                                            <li>
                                                <OrderCardComponent />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden" id="return"
                                         role="tabpanel" aria-labelledby="return-tab">
                                        <ul>
                                            <li>
                                                <OrderCardComponent />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="hidden " id="order"
                                         role="tabpanel" aria-labelledby="order-tab">
                                        <div className="pt-36 pb-24">
                                            <i style={{ fontSize:"50px" , color:"#40CDCC"}} className="fa-solid fa-note-sticky"></i>
                                            <h2 className="text-center my-4" style={{ color:"#bdbdbd"}}>No Orders</h2>
                                        </div>
                                    </div>
                                    <div className="hidden " id="membership"
                                         role="tabpanel" aria-labelledby="membership-tab">
                                        <div className="pt-36 pb-24">
                                            <i style={{ fontSize:"50px" , color:"#40CDCC"}} className="fa-solid fa-note-sticky"></i>
                                            <h2 className="text-center my-4" style={{ color:"#bdbdbd"}}>No Orders</h2>
                                        </div>
                                    </div>
                                    <div className="hidden " id="service"
                                         role="tabpanel" aria-labelledby="service-tab">
                                        <div className="pt-36 pb-24">
                                            <i style={{ fontSize:"50px" , color:"#40CDCC"}} className="fa-solid fa-note-sticky"></i>
                                            <h2 className="text-center my-4" style={{ color:"#bdbdbd"}}>No Orders</h2>
                                        </div>
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