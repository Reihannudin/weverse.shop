import {OrderCardComponent} from "./OrderCard.Component";
import React from "react";

export const ReturnCardComponent = () => {
    return(
        <>
            <div className=" bg-gray-50 my-6  p-4 rounded-lg  dark:bg-gray-800">
                <div className="mx-4">
                    <div className="flex  justify-between">
                        <div>
                            <p className="text-sm my-3 text-gray-500 dark:text-gray-400">
                                <div className="text-left my-auto">
                                    <p className="font-medium  my-auto" style={{ fontSize:"15px" , borderBottom:"1px solid #ebebebe"}}>BTS Official Store</p>
                                </div>
                            </p>
                        </div>
                        <div className="w-4/12 my-auto ">
                            <div className="my-1 text-left flex">
                                <p className="font-semibold my-auto text-left mx-3" style={{ color:"#3ECCCD"}}>Status:</p>
                                <div className="flex my-1 w-full justify-between" style={{ color:"rgba(131,130,130,0.87)"}} >
                                    <div className="text-left flex gap-2">
                                        <i className="fa-solid fa-box my-auto"></i>
                                        <p >16-04-2023 12:06</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="">Pesanan Dibuat</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between " style={{ borderBottom:"1px solid #ebebeb"}}>
                        <div className="flex my-3">

                            <div className="my-2" style={{ width:"60px" , height:"60px"}}>
                                <img className="w-full h-full"
                                     src="https://cdn-contents.weverseshop.io/public/shop/c6e60dbc87d9db215bed26652ee71f41.jpg?q=95&w=720"
                                     alt="BTS"/>
                            </div>
                            <div className="text-left mx-3 my-2">
                                <h5 style={{ fontSize:"16px"}}>LOVE YOURSELF 轉 'Tear'</h5>
                                <p style={{ fontSize:"15px", color:"#a6a6a6"}}>Options : LOVE YOURSELF 轉 'Tear' Version: O</p>
                            </div>
                        </div>
                        <div className="flex ms-0">
                            <div className="my-auto mx-6">
                                <div className="flex gap-1">
                                    <h2 className="font-normal my-auto" style={{ fontSize:"16px"}}>Quantity:</h2>
                                    <h2 className="font-normal my-auto" style={{ color:"#35c3c4" ,fontSize:"16px"}}>1</h2>
                                </div>
                            </div>
                            <div className="my-auto mx-10">
                                <div className="flex gap-1">
                                    <h2 className="font-normal my-auto" style={{ fontSize:"16px"}}>Status:</h2>
                                    <h2 className="font-normal my-auto" style={{ color:"#35c3c4" ,fontSize:"16px"}}>Packing</h2>
                                </div>
                            </div>
                            <div className="my-auto mx-0">
                                <div className="flex gap-1">
                                    <h2 className="font-normal my-auto" style={{ fontSize:"16px"}}>Price:</h2>
                                    <h2 className="font-semibold my-auto" style={{ color:"#35c3c4" ,fontSize:"16px"}}>$20</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex my-4 justify-between">
                        <div className="w-5/12 my-4 my-auto">
                            <div className="w-full my-3  ">
                                <div className=" text-left flex">
                                    <p className="font-semibold my-auto text-left mx-1" style={{ color:"#3ECCCD"}}>Status:</p>
                                    <div className="flex w-full " style={{ color:"rgba(131,130,130,0.87)"}} >
                                        <div className="text-left flex gap-2">
                                            <p >Return</p>
                                        </div>
                                    </div>
                                </div>
                                <div className=" text-left flex">
                                    <p className="font-semibold my-auto text-left mx-1" style={{ color:"rgba(131,130,130,0.87)"}}>Reason:</p>
                                    <div className="flex  w-full " style={{ color:"rgba(131,130,130,0.87)"}} >
                                        <div className="text-left flex gap-2">
                                            <p >Barangnya rusak</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex gap-2 mx-1 ">
                                <h2 className="my-auto" style={{ fontSize:"20px"}}>Total Order:</h2>
                                <h2 className="font-semibold" style={{ fontSize:"20px"}}>$40</h2>
                            </div>
                        </div>
                        <div className="flex w-2/12 gap-3">
                            <div className="relative w-full">
                                <div className="absolute right-0  bottom-0 ">
                                    <button className=" w-full py-3  px-4 font-medium py-0 px-6 " style={{ color:"#40CDCC" , borderRadius:"4px" , fontSize:"14px" , border:"1px solid #40CDCC"}}>Order Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


