import {OrderCardComponent} from "./Card/OrderCard.Component";
import {ReturnCardComponent} from "./Card/ReturnCard.Component";

export const ReturnListComponent = () => {
    return(
        <>
            <div className="w-full ">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 ">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Returns and Exchanges</h2>
                            </div>

                        </div>
                        <div>
                            {/*<div className="py-28">*/}
                            {/*<h2 className="text-center" style={{ color:"#bdbdbd"}}>No returns or exchanges.</h2>*/}
                            {/*    <button className="w-2/12 my-4 font-medium py-3 " style={{ color:"#40CDCC" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Shop Now</button>*/}
                            {/*</div>*/}
                            <div className="pb-16">
                                <ul>
                                    <li>
                                        <ReturnCardComponent />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}