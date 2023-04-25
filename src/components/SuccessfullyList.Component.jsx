import {Link, useLocation, useNavigate} from "react-router-dom";
import {CartCardComponent} from "./Card/CartCard.Component";
import {useEffect, useState} from "react";

export const SuccessfullyListComponent = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const searchParams = new URLSearchParams(location.search);

    const orderId = searchParams.get("orderId");

    const [cart , setCart] = useState([]);
    useEffect(() =>{
        // get data from API
        fetch(`http://127.0.0.1:8000/api/cart/${user.id}`)
            //     // make respionse to jsonn
            .then((response) => response.json())
            .then((cart => setCart(cart)));
    }, [])

    const [order , setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/order/${user.id}/success/${orderId}`)
            .then((response) => response.json())
            .then((order => setOrder(order)))
    } , [order])

    const [total , setTotal] = useState('0');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cart/total/price/${user.id}`)
            .then((response) => response.json())
            .then(total => setTotal(total))
    } , [total])

    const [bonus , setBonus] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/order/bonus/${user.id}`)
            .then((response) => response.json())
            .then(bonus => setBonus(bonus))
    } , [bonus])

    const [customer , setCustomer] = useState([])
    useEffect(() =>{
        fetch(`http://127.0.0.1:8000/api/customer/${user.id}`)
            .then((response) => response.json())
            .then(customer => setCustomer(customer))
    } , [customer])

    let grandTotal = parseFloat(total) + 47.20
    let grandTotalParse = parseFloat(grandTotal)


    return(
        <>
            <div className="w-full pb-14" style={{ background:"#F1F3F4"}}>
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        {order.map(((item) => {
                            return(
                                <>
                                    <div className="py-8" style={{  borderRadius:"12px",  background:"white"}}>
                                        <div className="w-6/12 mx-auto">
                                            <div>
                                                <i className="fa-solid fa-check-circle" style={{ color:"#08CCCA" ,fontSize:"35px"}}></i>
                                            </div>
                                            <div className="mt-4 mb-2 gap-4">
                                                <h2 style={{ fontSize:"22px"}}>Thank You!</h2>
                                                <h3  style={{ fontSize:"20px"}}>You order was successful.</h3>
                                            </div>
                                            <div className=" mx-auto my-2 w-5/12 ">
                                                <div className="flex mx-10 items-center text-center gap-2">
                                                    <p>Payment:</p>
                                                    {item.status_payment === 1 ? (
                                                        <p style={{ color: "#08CCCA"}}>Complete</p>
                                                    ):(
                                                        <p style={{ color: "#08CCCA"}}>Not Complete</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="w-6/12 mx-auto">
                                                <div className="py-1" style={{ border:"1px solid #ebebeb" , fontSize:"15px" , borderRadius:"8px"}}>
                                                    <p style={{ color:"#cecece"}}>Order Number: {item.id}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-8 my-6" style={{  borderRadius:"12px",  background:"white"}}>
                                        <div className="w-11/12 mx-auto">
                                            <div className="flex justify-between">
                                                <div className=" w-6/12 me-4 text-left" style={{ borderRight:"1px solid #ebebeb"}} >
                                                    <h2 style={{ fontSize:"18px"}} className="font-semibold">Shipping Address</h2>
                                                    <div className="my-2 text-left">
                                                        <div className="flex gap-3" style={{color:"#08CCCA"}}>
                                                            <p style={{ fontSize:"18px"}}>{item.address_receiver} {item.address_lastname}</p>
                                                            <p className="py-0 px-1 my-auto" style={{ border:"1px solid #08CCCA" , fontSize:"13px", borderRadius:"8px"}}>Default</p>
                                                        </div>
                                                        <div>
                                                            <p style={{ fontSize:"15px"}}>{item.address_street}, {item.address_city}, {item.address_state}</p>
                                                        </div>
                                                        <div>
                                                            <p>{item.address_postcode}</p>
                                                            <p>{item.address_country}</p>
                                                            <p>{item.address_phone_number}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div  className=" w-5/12 text-right">
                                                    <h2 style={{ fontSize:"18px"}} className="font-semibold">Shipping information</h2>
                                                    <div className="my-0 text-right">
                                                        <div className="mb-1 flex gap-2" style={{ color:"rgba(131,130,130,0.87)"}} >
                                                            <div className="text-left flex gap-2">
                                                                <p>Courier:</p>
                                                            </div>
                                                            <div className="text-left">
                                                                <p className="font-semibold">CJ courier</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="my-1 text-right">
                                                        {item.status_order.map((itemStatusOrder) => {
                                                            return(
                                                                <>
                                                                    <p className="font-semibold text-left">Status</p>
                                                                    <div className="flex my-1 justify-between" style={{ color:"rgba(131,130,130,0.87)"}} >
                                                                        <div className="text-left w-6/12 flex gap-2">
                                                                            <i className="fa-solid fa-box my-auto"></i>
                                                                            <p style={{ color:"#3ECCCD"}}>{itemStatusOrder.updated_at}</p>
                                                                        </div>
                                                                        <div className="w-6/12 text-left">
                                                                            {itemStatusOrder.order_made === 1 ? (
                                                                                <p className="font-semibold">Pesanan Dibuat</p>
                                                                            ):(
                                                                                <></>
                                                                            )}
                                                                            {itemStatusOrder.shipping === 0 ? (
                                                                                <p className="font-semibold">Anda harus menyelesaikan pembayaran terlebih dahulu</p>
                                                                            ):(
                                                                                <></>
                                                                            )}

                                                                            {itemStatusOrder.shipping === 1 ? (
                                                                                <p className="font-semibold">Pesanan anda telah dikirim</p>
                                                                            ):(
                                                                                <></>
                                                                            )}
                                                                            {itemStatusOrder.order_arrived === 1 ? (
                                                                                <p className="font-semibold">Pesanan Anda telah sampai</p>
                                                                            ):(
                                                                                <></>
                                                                            )}

                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })}
                                                    </div>
                                                    <div className="text-left">
                                                        <p style={{ fontSize:"15px"}}>Estimated Shipping</p>
                                                        <p style={{ color:"rgba(131,130,130,0.87)" ,fontSize:"14px"}}>Diperkirakan akan sampai ke anda sekitar 4-5 mingguan</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-11 my-5" style={{  borderRadius:"12px",  background:"white"}}>
                                        <div className="w-9/12 text-left mx-auto">
                                            <h2 style={{ fontSize:"18px"}} className="font-semibold">Your Order</h2>
                                            <div>
                                                <ul>
                                                    {cart.map((itemCart) => {
                                                                return(
                                                                    <li className="my-5 pb-8"  style={{ borderBottom:"1px solid #ebebeb"}}>
                                                                        <div className="flex justify-between" >
                                                                            <div className="flex gap-4">
                                                                                <div style={{ height:"70px" , width:"70px"}}>
                                                                                    <img src={itemCart.product_image} />
                                                                                </div>
                                                                                <div>
                                                                                    <h4 className="font-semibold">{itemCart.product_name}</h4>
                                                                                    <p style={{ color:"#a6a6a6"}}>Option: {itemCart.product_name}</p>
                                                                                    <p style={{ fontSize:"15px" , color:"#8f8f8f"}}>Quantity: {itemCart.quantity}</p>
                                                                                </div>
                                                                            </div>
                                                                            <div>
                                                                                <div className="my-auto text-right my-2">
                                                                                    <p className=" font-semibold">${itemCart.product_price}</p>
                                                                                    <button className="py-1 mt-4 px-4" style={{ borderRadius:"4px",fontSize:"14px", border:"1px solid #3ECCCD" ,color:"#3ECCCD"}}>
                                                                                        See Order
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                </ul>
                                                {customer.map((itemCustomer) => {
                                                    return(
                                                        <>
                                                            <div>
                                                                <div className="flex my-4 justify-between" style={{ fontSize:"16px"}} >
                                                                    <div className="text-left">
                                                                        <p>Subtotal (1 item)</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-bold">${total}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex my-4 justify-between" style={{ fontSize:"16px"}}>
                                                                    <div className="text-left">
                                                                        <p>Shipping Fee</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-bold">$47.20</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex my-4 justify-between" style={{ fontSize:"16px"}}>
                                                                    <div className="text-left">
                                                                        <p>Discount (Weverse Shop Cash)</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-bold">${itemCustomer.cash}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex py-3 mt-4 justify-between" style={{ background:"#f8f8f8" , border:"1px solid #f8f8f8" , fontSize:"16px"}}>
                                                                    <div className="text-left">
                                                                        <p className="font-semibold">Payment With</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-semibold">{item.payment_name}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex py-3 mt-4 justify-between" style={{ background:"#FFFEED" , border:"1px solid #F7F6DE" , fontSize:"18px"}}>
                                                                    <div className="text-left">
                                                                        <p className="font-bold">Grand Total</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-bold">${parseFloat(grandTotal) - itemCustomer.cash}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="flex my-3 justify-between" style={{ color:"#05C46B"}} >
                                                                    <div className="text-left">
                                                                        <p >Earned Weverse Shop Cash</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p className="font-bold">${bonus}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    )
}

// <div>
//     <div>
//         <h2></h2>
//         <div>
//
//         </div>
//     </div>
// </div>
