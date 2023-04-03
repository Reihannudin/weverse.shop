import {Link} from "react-router-dom";

export const NavigationComponent = () => {
    return(
        <>
            <nav className="w-full bg-white fixed " style={{ borderBottom:"1px solid #ffffff" , zIndex:"44"}}>
                <div className="w-10/12 mx-auto">
                    <div className=" flex justify-between mx-4" style={{ height:"62px"}}>
                        <div className="text-left gap-5 flex">
                            <div className="my-auto">
                                <img src="/assets/weverse.svg" alt="" />
                            </div>
                            <div className="flex gap-3">
                                <div className="my-auto">
                                    <div className="flex my-auto gap-2">
                                        <i className="fa-solid my-auto weverse-color fa-globe" style={{ fontSize:"18px"}}></i>
                                        <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                    </div>
                                </div>
                                <div className="flex gap-2 my-auto" style={{ borderLeft:"1px solid #ebebeb"}} >
                                    <div className="ms-3 gap-2 flex ">
                                        <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">English</span>
                                        <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
                                    </div>
                                    <div className="ms-0  gap-2 flex">
                                        <span style={{ fontSize:"14px"}} className="font-medium text-gray-500">$(USD)</span>
                                        <i className="fa-solid my-auto fa-chevron-down text-gray-500" style={{ fontSize:"12px"}}></i>
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
                                        <Link to="">
                                            <div>
                                                <p>Order Shipping</p>
                                            </div>
                                        </Link>
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
                </div>
            </nav>
        </>
    )
}
