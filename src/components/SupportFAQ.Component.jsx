import {Link} from "react-router-dom";
import SupportListCardComponent from "./SupportListCard.Component";

export const SupportFAQComponent = () => {
    return(
        <>
            <div className="w-full pb-20">
                <div className="w-10/12 pb-4 mx-auto">
                    <div className="mx-5 pt-0">
                        <div className="flex pb-8 justify-between">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"24px"}}>Frequently Asked Questions</h2>
                            </div>
                            <div className=" my-auto">
                                <Link to="/">
                                    <i className="fa-solid  my-auto fa-angle-right" style={{ fontSize:"26px"}}>

                                    </i>
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div>
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
                                                role="tab" aria-controls="dashboard" aria-selected="false">Shipping
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                            id="return-tab" data-tabs-target="#return" type="button" role="tab"
                                                aria-controls="settings" aria-selected="false">Exchange / Return
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                                id="order-tab" data-tabs-target="#order" type="button" role="tab"
                                                aria-controls="contacts" aria-selected="false">Order Payment
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                               id="membership-tab" data-tabs-target="#membership" type="button" role="tab"
                                                aria-controls="settings" aria-selected="false">Membership
                                            </button>
                                        </li>
                                        <li className="" role="presentation">
                                            <button
                                                style={{ width:"180px" , border:"1px solid #ebebeb"}}
                                                className="inline-block w-full p-4 bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                                            id="service-tab" data-tabs-target="#service" type="button" role="tab"
                                                aria-controls="settings" aria-selected="false">Member / Service
                                            </button>
                                        </li>

                                    </ul>
                                </div>
                                <div id="myTabContent">
                                    <div className="hidden p-4 rounded-lg  bg-gray-50  dark:bg-gray-800" id="all"
                                         role="tabpanel" aria-labelledby="all-tab">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            <SupportListCardComponent />
                                        </p>
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="shipping"
                                         role="tabpanel" aria-labelledby="shipping-tab">
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            <SupportListCardComponent />
                                        </p>
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="return"
                                         role="tabpanel" aria-labelledby="return-tab">
                                        <SupportListCardComponent />

                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="order"
                                         role="tabpanel" aria-labelledby="order-tab">
                                        <SupportListCardComponent />
                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="membership"
                                         role="tabpanel" aria-labelledby="membership-tab">
                                        <SupportListCardComponent />

                                    </div>
                                    <div className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="service"
                                         role="tabpanel" aria-labelledby="service-tab">
                                        <SupportListCardComponent />

                                    </div>
                                </div>
                                <div className="my-5">
                                    <div className="flex ms-auto text-right gap-2">
                                        <button className="font-medium ms-auto me-0 px-12 py-3" style={{ borderRadius:"6px" , border:"1px solid #ebebeb" , color:"#5e5e5e"}}>Contact Us</button>
                                        <button className="font-medium ms-0 me-0 px-12 py-3" style={{ borderRadius:"6px" , border:"1px solid #ebebeb" , color:"#5e5e5e"}}>My Inquires</button>
                                    </div>
                                </div>

                                {/*========================================*/}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}