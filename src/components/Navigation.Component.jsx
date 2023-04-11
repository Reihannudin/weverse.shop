import {Link, useHref, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export const NavigationComponent = () => {

    const [artist , setArtist] = useState([])
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const auth_token = urlParams.get("auth_token");
    const setuser = urlParams.get("user");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/artist")
            .then((response) => response.json())
            .then(artist => setArtist(artist))
    } , [])

    const langparam = useParams();
    // console.log(langparam)
    const [language , setLanguage] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/language")
            .then((response) => response.json())
            .then(language => setLanguage(language))
    } , [language])

    // const handleLogout = () => {
    //     fetch('http://127.0.0.1:8000/logout', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
    //         }
    //     })
    //         .then(response => {
    //             if (response){
    //                 localStorage.setItem('isLogin' , false)
    //                 localStorage.setItem("token", auth_token);
    //                 localStorage.setItem("whoLogin", setuser);
    //                 navigate("/");
    //             }
    //         })
    //         .catch(error => {
    //             // handle error
    //         });
    // }

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const logged = JSON.parse(localStorage.getItem('isLogin'));

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
                                            <div className="relative bg-white w-8/12 rounded-lg shadow dark:bg-gray-700" style={{ height:"500px"}} >
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
                                                <div className="w-4/5 mx-auto" style={{ height:"260px" , overflowY:"scroll"}}>
                                                    {artist.map((item) => {
                                                        return(
                                                            <li className="mx-3 my-5 list-none">
                                                                <div className="w-full block gap-4">
                                                                    <div className="flex gap-2">
                                                                        <div style={{ width:"28px" ,height:"28px" , borderRadius:"100%"}}>
                                                                            <img style={{  borderRadius:"100%"}} className="w-full h-full" src={item.image} alt={item.name} />
                                                                        </div>
                                                                        <h3 style={{ fontSize:"18px"}} className="font-normal">{item.name}</h3>
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
                                                        )
                                                    })}
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
                                    <div className="ms-3 cursor-pointer gap-2 flex">
                                        {langparam.lang_id === "en" ? (
                                            <button
                                                id="dropdownNavbarLink"
                                                style={{ fontSize: "14px" }}
                                                data-dropdown-toggle="dropdown_language"
                                                className="cursor-pointer gap-2 flex"
                                            >
      <span style={{ fontSize: "14px" }} className="font-medium text-gray-500">
        English
      </span>
                                                <i
                                                    className="fa-solid my-auto fa-chevron-down text-gray-500"
                                                    style={{ fontSize: "12px" }}
                                                ></i>
                                            </button>
                                        ) : langparam.lang_id === "kr" ? (
                                            <button
                                                id="dropdownNavbarLink"
                                                style={{ fontSize: "14px" }}
                                                data-dropdown-toggle="dropdown_language"
                                                className="cursor-pointer gap-2 flex"
                                            >
      <span style={{ fontSize: "14px" }} className="font-medium text-gray-500">
       한국어
      </span>
                                                <i
                                                    className="fa-solid my-auto fa-chevron-down text-gray-500"
                                                    style={{ fontSize: "12px" }}
                                                ></i>
                                            </button>
                                        ) : langparam.lang_id === "jp" ? (
                                            <button
                                                id="dropdownNavbarLink"
                                                style={{ fontSize: "14px" }}
                                                data-dropdown-toggle="dropdown_language"
                                                className="cursor-pointer gap-2 flex"
                                            >
      <span style={{ fontSize: "14px" }} className="font-medium text-gray-500">
        日本語
      </span>
                                                <i
                                                    className="fa-solid my-auto fa-chevron-down text-gray-500"
                                                    style={{ fontSize: "12px" }}
                                                ></i>
                                            </button>
                                        ) : null}

                                    <div id="dropdown_language"
                                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                {language.map((langitem) =>{
                                                    return(
                                                        <>
                                                            { langitem.currency[0] ? (
                                                            <li>
                                                                {/*<button  className="w-full" onClick={() => handleLanguageSwitch('en')}>*/}
                                                                <a  href={`/${langitem.slug}/home/${langitem.currency[0].slug}`} >
                                                                    <p
                                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{langitem.language}</p>
                                                                </a>
                                                                {/*</button>*/}
                                                            </li>
                                                            ) : langitem.currency[1] ? (
                                                            <a  href={`/${langitem.slug}/home/${langitem.currency[0].slug}`} >
                                                              <p
                                                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{langitem.language}</p>
                                                            </a>
                                                              ): langitem.currency[2] ?(
                                                            <a  href={`/${langitem.slug}/home/${langitem.currency[0].slug}`} >
                                                              <p
                                                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{langitem.language}</p>
                                                            </a>
                                                            ) : null
                                                        }

                                                        </>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="ms-0 cursor-pointer   gap-2 flex">
                                        {langparam.currency_id === "GL_USD" ? (
                                            <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_money"
                                                    className=" cursor-pointer gap-2 flex ">
                                                <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">$(USD)</span>
                                                <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                            </button>
                                        ) : langparam.currency_id === "GL_KRW" ? (
                                            <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_money"
                                                    className=" cursor-pointer gap-2 flex ">
                                                <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">₩(KRW)</span>
                                                <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                            </button>
                                        ) : langparam.currency_id === "GL_JPY" ? (
                                            <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_money"
                                                    className=" cursor-pointer gap-2 flex ">
                                                <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">¥(JPY)</span>
                                                <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                            </button>
                                        ): null}
                                        <div id="dropdown_money"
                                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                {language.map((langitem) =>{
                                                    // console.log(langitem.currency)
                                                    return(
                                                        <>
                                                            {langitem.slug === langparam.lang_id  ? (
                                                                <>
                                                                    {langitem.currency.map((currencyItem) => {
                                                                        // console.log(currencyItem)
                                                                        return(
                                                                            <>
                                                                                <li>
                                                                                    <a  href={`/${langparam.lang_id}/home/${currencyItem.slug}`}
                                                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{currencyItem.currency}</a>
                                                                                </li>
                                                                            </>
                                                                        )
                                                                    })}
                                                                </>
                                                            ): (
                                                                <></>
                                                            )}
                                                        </>
                                                    )
                                                })}
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
                                        <Link to="/support">
                                            <p>Support</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            {logged ? (
                                <div className="my-auto flex gap-3">
                                    <li className="ps-3 list-none" style={{ borderLeft:"1px solid #ebebeb"}}>
                                        <button id="dropdownNavbarLink" style={{ fontSize:"14px"}}  data-dropdown-toggle="dropdown_profile"
                                                className=" cursor-pointer gap-2 flex ">
                                            <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">{user.name}</span>
                                            <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                        </button>
                                        <div id="dropdown_profile"
                                             className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                            <ul className="py-2 text-sm text-left text-gray-700 dark:text-gray-400"
                                                aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <button className="w-full text-left" >
                                                        <p className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Log Out</p>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </div>
                            ):(
                                <div className="my-auto flex gap-3">
                                    <button className="btn weverse-background-btn border-radius-20 px-5 py-1.5">
                                        <Link to="/login">
                                            <p className="font-medium text-white" style={{ fontSize:"14px"}}>Log in</p>
                                        </Link>
                                    </button>
                                    <button className="btn border-radius-20 px-5 py-1.5" style={{ border:"1px solid #08CCCA"}}>
                                        <Link to="/signup">
                                            <p className="font-medium weverse-color" style={{ fontSize:"14px"}}>Sign Up</p>
                                        </Link>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
            </nav>
        </>
    )
}
