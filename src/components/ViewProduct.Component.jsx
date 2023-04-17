import {useState} from "react";

export const ViewProductComponent = (props) =>{

    let [quantity , setQuantity] = useState(1);

    const incrementQuantity = () => {
        setQuantity(quantity++)
    }

    const decrementQuantity = () => {
        setQuantity(quantity--)
    }

    const user = JSON.parse(localStorage.getItem('whoLogin'));

    return(
        <>
            <div className="w-full pb-10 mb-10" >
                <div className="w-10/12 pb-5 mx-auto" style={{ borderBottom:"1px solid #ebebeb"}}>
                            <div className="mx-4 my-14 flex justify-between">
                                <div className="w-full mx-auto">
                                    <img className="w-100" src={props.image} alt=""/>
                                </div>
                                <div className="text-left  mx-16 w-11/12">
                                    <div className="text-left mx-auto w-full">
                                        <div>
                                            <div className="flex gap-1" style={{ color:"#37D089"}}>
                                                <i className="fa-solid my-auto fa-check-circle" style={{ fontSize:"13px"}}></i>
                                                <p className="my-auto" style={{ fontSize:"13px"}}>EXCLUSIVE</p>
                                            </div>
                                            <div className="block gap-7">
                                                <h2 className="pt-2"  style={{ fontSize:"28px"}}>{props.name}</h2>
                                                <h3 className="font-bold py-2"  style={{ fontSize:"26px"}}>${props.price}</h3>
                                                <h5 className="py-2 font-medium" style={{ fontSize:"16px " , color:"#8F9AF0"}}>Weverse Shop Cash $0.10</h5>
                                            </div>
                                            <div className="my-4">
                                                <div className="flex gap-4">
                                                    <div className="">
                                                        <i className="fa-solid fa-clock" style={{ fontSize:"14px" , color:"#05C46B"}}></i>
                                                    </div>
                                                    <div  className="font-medium">
                                                        <p>For pre-order</p>
                                                        <div className="flex justify-between">
                                                            <p style={{ color:"#05C46B" , fontSize:"15px"}}>Scheduled Shipping Start Date</p>
                                                            <p className="mx-4" style={{ fontSize:"14x"}}>06/13/2023 ~ 06/20/2023</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex px-4 my-3 py-2" style={{ color:"#ADB7CE" , background:"#FAFBFC"}}>
                                                    <div>
                                                        <i className="fa-solid fa-clock" style={{ fontSize:"13px" }}></i>
                                                    </div>
                                                    <div className="px-3">
                                                        <p style={{ fontSize:"14px"}}>Scheduled Delivery Date is subject to product and logistics issues and may face delays.If the schedule is changed, customers will be notified individually.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ borderTop:"1px solid #ebebeb"}}>
                                                <p className="mt-3.5 mb-2"  style={{ color:"#383838"}}>{props.name}</p>
                                                <div className="flex mb-4 justify-between">
                                                    <div>
                                                        <button className="px-2" onClick={decrementQuantity} style={{ border:"1px solid #BEBEBE", color:"#ababab",borderRadius:"4px",fontSize:"16px"}}>-</button>
                                                        <input className="w-2/12 text-center" id="quantity" type="text"  value={quantity}/>
                                                        <button className="px-2" onClick={incrementQuantity} style={{ border:"1px solid #BEBEBE", color:"#ababab", borderRadius:"4px",fontSize:"16px"}}>+</button>
                                                    </div>
                                                    <div>
                                                        <p>${props.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ borderTop:"1px solid #ebebeb"}}>
                                                <div className="flex px-4 my-0 py-1" style={{ color:"#ADB7CE" , background:"#FAFBFC"}}>
                                                    <i></i>
                                                    <p>You can order up to 5 items.</p>
                                                </div>
                                            </div>
                                            <div className="my-4">
                                                <div className="flex justify-between">
                                                    <p>Total ({quantity} item)</p>
                                                    <p className="font-bold">${quantity * props.price}</p>
                                                </div>
                                            </div>
                                            <div className="flex mx-auto gap-4">
                                                <a href={`http://127.0.0.1:8000/api/add/${props.id}/to/cart/${user.id}`} className="w-full text-center font-medium py-4" style={{ color:"#40CDCC" , borderRadius:"4px" , fontSize:"20px" , border:"1px solid #40CDCC"}}>Add To Cart</a>
                                                <button className="w-full font-medium py-4" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"20px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Buy Now</button>
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