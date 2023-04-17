// import {CartCardComponent} from "./Card/CartCard.Component";
import {useEffect, useState} from "react";
import {CartCardComponent} from "./Card/CartCard.Component";

export const CartListComponent = ({user_id}) => {

    const [cart , setCart] = useState([]);

    useEffect(() =>{
        // get data from API
        fetch(`http://127.0.0.1:8000/api/cart/${user_id}`)
            //     // make respionse to jsonn
            .then((response) => response.json())
            .then((cart => setCart(cart)));
    }, [])

    const [total , setTotal] = useState('0');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cart/total/price/${user_id}`)
            .then((response) => response.json())
            .then(total => setTotal(total))
    } , [total])


    const checkIsEmpty = cart.length === 0;
    console.log(cart);


    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 justify-between">
                    <div className=" my-auto">
                        <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Cart</h2>
                    </div>
                        {checkIsEmpty ? (
                            <></>
                        ):(
                            <div className=" my-auto">
                            <button className="px-2 my-auto py-1 " style={{ border:"1px solid #afafaf" , fontSize:"14px", borderRadius:"6px" , color:"#afafaf"}}>
                            Remove sold out
                            </button>
                            </div>
                        )}
                        </div>
                        {checkIsEmpty ? (
                            <div className="py-24">
                                <h2 className="text-center font-medium" style={{ color:"#bdbdbd"}}>Your cart is empty.</h2>
                                <button className="w-2/12 my-4 font-medium py-2 " style={{ color:"white" ,background:"#40CDCC", borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Shop Now</button>
                            </div>
                        ):(
                            <div>
                                <div className="text-left" style={{ borderBottom:"1px solid #ebebeb"}}>
                                    <div className="flex py-5 gap-2.5">
                                        <input className="cursor-pointer" style={{width:"22px" , color:"#05DCB5" , background:"#05DCB5"}} type="radio" />
                                        <p>Select all items</p>
                                    </div>
                                </div>
                                <div>
                                    <ul>
                                        {cart.map((item) => {
                                            return(
                                                <li>
                                                    <CartCardComponent id={item.id} quantity={item.quantity} image={item.product_image} name={item.product_name} price={item.product_price} />
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className="py-6" style={{ background:"#FFFEED" , borderTop:"1px solid #ebebeb"}}>
                                    <div className="flex mx-8 justify-between">
                                        <div className="my-auto">
                                            <h2 className="my-auto font-bold" style={{ fontSize:"20px"}}>Total (1 item)</h2>
                                        </div>
                                        <div className="flex gap-6">
                                            <h2 className="my-auto font-bold" style={{ fontSize:"20px"}}>${total}</h2>
                                            <button className="w-full font-medium px-8 py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"14px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Check Out</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )}
                    </div>
                </div>
            </div>
        </>
    )
}