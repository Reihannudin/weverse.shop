import {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Shop from "../../pages/Shop";

export const ArtistCardComponent = (props) => {

    return(
        <>
            {/*<Routes>*/}
            {/*    <Route path="/shop/:artistId" element={<Shop artistId={props.id} />}></Route>*/}
            {/*</Routes>*/}
            <div className="w-full  my-4 flex" style={{ height: "100px"}}>
                <div style={{ height: "90px" ,  width: "90px", borderRadius: "100%"}} >
                    <img className="w-full h-full" src={props.image}
                         style={{ borderRadius: "100%"}} alt="logo"/>
                </div>
                <div className="block my-auto text-left mx-3 gap-2">
                    <div className="align-items-center ms-4 my-auto ">
                        <h5 className="font-bold mb-2 py-0" style={{ fontSize:"20px"}}>{props.name}</h5>
                        <div className="py-0 mt-0 mb-2 flex">
                            <Link to={`/shop/${props.id}`}   >
                                {/*//element={<Shop artistId={} />}*/}
                                <div className="flex me-4 gap-2" style={{borderRight: "1px solid #858888"}}>
                                    <div >
                                        <i className="fa-solid h-full fa-globe" style={{ fontSize:"17px"}}></i>
                                    </div>
                                    <h6 style={{marginTop: "1px" , marginRight: "8px"}}>GLOBAL</h6>
                                </div>
                            </Link>
                            <div className="flex pe-4 gap-2 " style={{borderRight: "1px solid #858888"}}>
                                <div className="mt-1" style={{height: "20px"}}>
                                    <img src="/assets/indonesia-flag.svg" className="h-full"
                                         alt=""/>
                                </div>
                                    <h6 style={{marginTop: "1px"}}>USA</h6>
                            </div>
                            <div className="flex ms-4 pe-4 gap-2 " >
                                <div className="mt-1" style={{height: "20px"}}>
                                    <img src="/assets/indonesia-flag.svg" className="h-full"
                                         alt=""/>
                                </div>
                                <h6 style={{marginTop: "1px"}}>JAPAN</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}