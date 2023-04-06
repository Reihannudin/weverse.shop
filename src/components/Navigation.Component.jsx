import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const NavigationComponent = ({id}) => {

    const [artist , setArtist] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/artist")
            .then((response) => response.json())
            .then(artist => setArtist(artist))
    } , [])

    return(
        <>
            <nav className="w-full bg-white fixed " style={{ borderBottom:"1px solid #ffffff" , zIndex:"44"}}>
                <div className="w-10/12 mx-auto flex justify-between">
                    <div className=" flex justify-between mx-4" style={{ height:"62px"}}>
                        <div className="text-left gap-5 flex">
                            <div className="my-auto">
                                <img src="/assets/weverse.svg" alt="" />
                            </div>
                            <div className="flex gap-3">
                                <div className="my-auto">
                                    {/*<div className="flex my-auto gap-2">*/}
                                    {/*    <i className="fa-solid my-auto weverse-color fa-globe" style={{ fontSize:"18px"}}></i>*/}
                                    {/*    <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>*/}
                                    {/*</div>*/}
                                    {/*<div className="ms-3 cursor-pointer gap-2 flex ">*/}
                                    {/*    <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">Select Artist</span>*/}
                                    {/*    <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>*/}
                                    {/*</div>*/}
                                    <button id="dropdownNavbarLink" data-modal-target="defaultModal" data-modal-toggle="defaultModal"  style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdownNavbar"
                                            className="ms-3 cursor-pointer gap-2 flex ">
                                            <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">Select Artist</span>
                                            <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                     </button>
                                    <div id="defaultModal" tabIndex="-1" aria-hidden="true" style={{ background:"rgba(75,75,75,0.67)" }} className="fixed z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                        <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                                            <div className="relative bg-white w-8/12 rounded-lg shadow dark:bg-gray-700">
                                                <div className="flex items-start justify-end py-7 px-4 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-bold w-full ms-5 font-semibold text-center text-gray-900 dark:text-white">
                                                        Select Shop
                                                    </h3>
                                                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <div className="w-6/12 my-3 mx-auto">
                                                    <p className="text-center text-gray-500" style={{ fontSize:"13px"}}>Select artist shop to move to the
                                                        main page of the artist shop.</p>
                                                </div>
                                                <div className="w-4/5 mx-auto">
                                                    <li className="mx-3 my-5 list-none">
                                                        <div className="w-full block gap-4">
                                                            <div className="flex gap-2">
                                                                <div style={{ width:"28px" ,height:"28px" , borderRadius:"100%"}}>
                                                                    <img style={{  borderRadius:"100%"}} className="w-full h-full" src="https://cdn-contents.weverseshop.io/public/shop/88b0601c7d5a06f90bfec4b0dfe92dbf.jpg" alt="BTS" />
                                                                </div>
                                                                <h3 style={{ fontSize:"18px"}} className="font-normal">BTS</h3>
                                                            </div>
                                                            <div className="my-3">
                                                                <div className="flex gap-4">
                                                                    <button className="px-3 py-1 " style={{ border:"1px solid #ebebeb" , borderRadius:"18px"}}>
                                                                        <Link to="">
                                                                            <div className="flex gap-2">
                                                                                <div>
                                                                                    <i style={{ fontSize:"16px" , color:"rgba(97,255,216,0.78)"}} className="fa-solid fa-globe"></i>
                                                                                </div>
                                                                                <p className="my-auto" style={{ fontSize:"14px"}}>GLOBAL</p>
                                                                            </div>
                                                                        </Link>
                                                                    </button>
                                                                    <button className="px-3 py-1 " style={{ border:"1px solid #ebebeb" , borderRadius:"18px"}}>
                                                                        <Link to="">
                                                                            <div className="flex gap-2">
                                                                                <div>
                                                                                    <i style={{ fontSize:"16px" , color:"rgba(97,255,216,0.78)"}} className="fa-solid fa-globe"></i>
                                                                                </div>
                                                                                <p className="my-auto" style={{ fontSize:"14px"}}>USA</p>
                                                                            </div>
                                                                        </Link>
                                                                    </button>
                                                                    <button className="px-3 py-1 " style={{ border:"1px solid #ebebeb" , borderRadius:"18px"}}>
                                                                        <Link to="">
                                                                            <div className="flex gap-2">
                                                                                <div>
                                                                                    <i style={{ fontSize:"16px" , color:"rgba(97,255,216,0.78)"}} className="fa-solid fa-globe"></i>
                                                                                </div>
                                                                                <p className="my-auto" style={{ fontSize:"14px"}}>JAPAN</p>
                                                                            </div>
                                                                        </Link>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </div>
                                                <div className="mx-6 py-7">
                                                    <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Log In</button>
                                                </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2 my-auto" style={{ borderLeft:"1px solid #ebebeb"}} >
                                    <div className="ms-3 cursor-pointer  gap-2 flex ">
                                        <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_language"
                                                className=" cursor-pointer gap-2 flex ">
                                            <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">English</span>
                                            <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                        </button>
                                        <div id="dropdown_language"
                                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Korean</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Japanese</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ms-0 cursor-pointer   gap-2 flex">
                                        <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_money"
                                                className=" cursor-pointer gap-2 flex ">
                                            <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">$(USD) </span>
                                            <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                        </button>
                                        <div id="dropdown_money"
                                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">W(KRW) South Korean Won</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">$(USD) US Dollar</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Y(JPY) Japanese Yen</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div  style={{ fontSize:"14px"}} className="font-medium my-auto text-gray-500">
                                <ul className="list-none gap-2  flex my-auto">
                                    <li className="pe-2" style={{ borderRight:"1px solid #ebebeb"}}>
                                        <Link to="">
                                            <p>Cart</p>
                                        </Link>
                                    </li>
                                    <li className="pe-2" style={{ borderRight:"1px solid #ebebeb"}}>
                                        <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_order"
                                                className=" cursor-pointer gap-2 flex ">
                                            <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">Order Shipping</span>
                                            <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                        </button>
                                        <div id="dropdown_order"
                                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Order history</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Return and Exchanges</a>
                                                </li>
                                                <li>
                                                    <a href="#"
                                                       className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Manage Address</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="pe-2" style={{ borderRight:"1px solid #ebebeb"}}>
                                        <Link to="">
                                            <p>Announcement</p>
                                        </Link>
                                    </li>
                                    <li className="pe-2" style={{ borderRight:"1px solid #ebebeb"}}>
                                        <Link to="">
                                            <p>Events</p>
                                        </Link>
                                    </li>
                                    <li className="pe-2" >
                                        <Link to="">
                                            <p>Support</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="my-auto flex gap-3">
                                <button className="btn weverse-background-btn border-radius-20 px-5 py-1.5">
                                    <Link>
                                        <p className="font-medium text-white" style={{ fontSize:"14px"}}>Log in</p>
                                    </Link>
                                </button>
                                <button className="btn border-radius-20 px-5 py-1.5" style={{ border:"1px solid #08CCCA"}}>
                                    <Link>
                                        <p className="font-medium weverse-color" style={{ fontSize:"14px"}}>Sign in</p>
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
            </nav>
        </>
    )
}
