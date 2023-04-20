
import {CheckoutProductListComponent} from "./Card/CheckoutProductList.Component";
import {useEffect, useState } from "react";
import {useLocation, useNavigate} from "react-router-dom";


export const CheckoutListComponent = () => {

    const user = JSON.parse(localStorage.getItem('whoLogin'));
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    const paymentId = searchParams.get("paymentid");

    const [paymentInfo , setPaymentInfo] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/payment/${paymentId}`)
            .then((response) => response.json())
            .then(paymentInfo => setPaymentInfo(paymentInfo))
    } , [paymentInfo])

    const [payment , setPayment] = useState([]);
    const [seletectedPayment , setSelectedPayment] = useState(null);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/payment`)
            .then((response) => response.json())
            .then(payment => setPayment(payment))
    } , [payment])

    const handlerPaymentSelect = (payment) => {
        setSelectedPayment(payment)
        navigate(`?paymentid=${payment.id}`);
    }

    const [customer, setCustomer] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/customer/${user.id}`)
            .then((response) => response.json())
            .then(customer => setCustomer(customer))
    } , [customer]);

    const addressId = searchParams.get("addressid");

    localStorage.setItem('addressId' , addressId)

    const [selectedAddress , setSelectedAddress] = useState(null);
    const handlerAddressSelect = (address) => {
        setSelectedAddress(address)
        navigate(`?addressid=${address.id}`)
    }

    const [addressDefault , setAddressDefault] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/my/${user.id}/default/address/${addressId}`)
            .then((response) => response.json())
            .then(addressDefault => setAddressDefault(addressDefault))
    } , [addressDefault])

    console.log(addressDefault)
    //

    const [listAddress , setListAddress] = useState([]);
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/my/address/${user.id}`)
            .then((response) => response.json())
            .then(listAddress => setListAddress(listAddress))
    } , [listAddress])

    const [product , setProduct] = useState([]);
    useEffect(() =>{
        // get data from API
        fetch(`http://127.0.0.1:8000/api/cart/${user.id}`)
            //     // make respionse to jsonn
            .then((response) => response.json())
            .then((product => setProduct(product)));
    }, [product])

    const [total , setTotal] = useState('0');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cart/total/price/${user.id}`)
            .then((response) => response.json())
            .then(total => setTotal(total))
    } , [total])

    const [qty , setQty] = useState('0');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cart/total/item/${user.id}`)
            .then((response) => response.json())
            .then(qty => setQty(qty))
    } , [qty])

    const popUpAddress = () => {
        const popUp = document.getElementById('pop_up_address')
        if(popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    const popUpShipping = () => {
        const popUp = document.getElementById('pop_up_shipping')
        if(popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div>
                            <div className="text-left my-7">
                                <h1 className="font-bold" style={{ fontSize:"30px"}}>Checkout</h1>
                            </div>
                            <div className="flex pt-4 my-4 pb-7" style={{ background:"#FAFBFC"}}>
                                <div className="ms-9 me-4">
                                    <i style={{ color:"#05C46B"}} className="fa-solid fa-clock"></i>
                                </div>
                                <div>
                                    <div className="text-left font-semibold">
                                        <p style={{ fontSize:"17px"}}>For pre-order</p>
                                    </div>
                                    <div className="flex gap-3 font-semibold">
                                        <p style={{ color:"#05C46B"}}>Scheduled Shipping Start Date</p>
                                        <p>04/21/2023 ~ 04/28/2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="my-7">
                                <div className="text-left my-2 font-bold">
                                    <p style={{ fontSize:"20px"}}>Your Order</p>
                                </div>
                                <div className="mt-8 mb-14">
                                    <div>
                                        <ul>
                                            {product.map((item) => {
                                                return(
                                                    <CheckoutProductListComponent image={item.product_image} name={item.product_name} price={item.product_price} qty={item.quantity} />
                                                )
                                            })}
                                        </ul>
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p>Total ({qty} item)</p>
                                        </div>
                                        <div className="font-bold">
                                            <p>${total}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="my-8">
                                <div className="flex my-4 gap-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Shipping Address</h2>
                                    <button className="py-1 px-3" onClick={popUpAddress} style={{ border:"1px solid #CACACA" , color:"#a8a8a8" , borderRadius:"4px" , fontSize:"15px"}}>Change</button>
                                    <div id="pop_up_address" tabIndex="-1" onclose={popUpAddress}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                        <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"32%"}}>
                                            <div className="relative bg-white w-9/12 top-8 rounded-lg shadow dark:bg-gray-700" style={{ height:"550px"}} >
                                                <div className="flex items-start  py-6 px-4 border-b rounded-t dark:border-gray-600">
                                                    <button type="button"  onClick={popUpAddress}  style={{ color:"#08CCCA" , fontSize:"17px"}} className="bg-transparent flex gap-2 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                                        <i className="fa-solid fa-plus"></i>
                                                        <p>Add</p>
                                                    </button>
                                                    <h3 className="text-xl font-bold w-full mx-auto font-bold text-center text-gray-900 dark:text-white">
                                                        Select Shipping Address
                                                    </h3>
                                                    <button type="button"  onClick={popUpAddress} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <div className="w-5/5 mx-auto" style={{ height:"370px" , overflowY:"scroll"}}>
                                                    <div className="mx-6 my-4">
                                                        <ul>
                                                            {listAddress.map((adddress_item) => {
                                                                return(
                                                                    <li className="my-4">
                                                                        <div className="flex" style={{ borderBottom:"1px solid #ebebeb"}}>
                                                                            <div className="mx-3 my-auto">
                                                                                <input type="radio"
                                                                                       value={adddress_item.id}
                                                                                       checked={selectedAddress?.id === adddress_item.id}
                                                                                       onChange={() => handlerAddressSelect(adddress_item)}
                                                                                       className="my-auto" style={{ border:"1px solid #ebebeb"}} />
                                                                            </div>
                                                                            <div className="mx-2">
                                                                                <div className="flex gap-3" style={{color:"#08CCCA"}}>
                                                                                    <p style={{ fontSize:"18px"}}>{adddress_item.receiver} {adddress_item.lastname}</p>
                                                                                    <p className="py-0 px-1 my-auto" style={{ border:"1px solid #08CCCA" , fontSize:"13px", borderRadius:"8px"}}>Default</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p style={{ fontSize:"15px"}}>{adddress_item.street},{adddress_item.city}, {adddress_item.state}</p>
                                                                                </div>
                                                                                <div>
                                                                                    <p>{adddress_item.postcode}</p>
                                                                                    <p>{adddress_item.country}</p>
                                                                                    <p>{adddress_item.phone_number}</p>
                                                                                </div>
                                                                                <div className="flex mt-2 mb-4 gap-2">
                                                                                    <button className="py-0.5 px-3" style={{ border:"1px solid #CACACA" , color:"#a8a8a8" , borderRadius:"4px" , fontSize:"15px"}}>Edit</button>
                                                                                    <button className="py-0.5 px-3" style={{ border:"1px solid #CACACA" , color:"#a8a8a8" , borderRadius:"4px" , fontSize:"15px"}}>Delete</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                )
                                                            })}
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="mx-6 py-7">
                                                    <a href={`http://127.0.0.1:8000/api/set/${user.id}/default/${addressId}`}>
                                                        <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    {addressDefault.map((itemAddress) => {
                                        return(
                                            <div>
                                                <div className="flex gap-2">
                                                    <p>{itemAddress.receiver} </p>
                                                    <p>{itemAddress.lastname}</p>
                                                </div>
                                                <div  className="flex ">
                                                    <p>{itemAddress.street}</p>
                                                    <p>, {itemAddress.city}</p>
                                                    <p>, {itemAddress.state}</p>
                                                </div>
                                                <div>
                                                    <p>{itemAddress.postcode}</p>
                                                </div>
                                                <div>
                                                    <p>{itemAddress.country}</p>
                                                </div>
                                                <div>
                                                    <p>{itemAddress.contact}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="my-8">
                                <div className="flex my-4 gap-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Customer</h2>
                                </div>
                                <div>
                                    {customer.map((customerItem) => {
                                        return(
                                            <div>
                                                <div>
                                                    <p>{customerItem.email}</p>
                                                </div>
                                                <div>
                                                    <p>{customerItem.phone_number}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="my-8">
                                <div className="flex my-4 gap-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Shipping Option</h2>
                                    <button className="py-1 px-3"  onClick={popUpShipping} style={{ border:"1px solid #CACACA" , color:"#a8a8a8" , borderRadius:"4px" , fontSize:"15px"}}>Change</button>
                                    <div id="pop_up_shipping" tabIndex="-1" onclose={popUpShipping}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                        <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"26%"}}>
                                            <div className="relative bg-white w-11/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"420px"}} >
                                                <div className="flex items-start justify-end py-6 px-4 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-bold w-full ms-5 font-bold text-center text-gray-900 dark:text-white">
                                                        Select Shipping Method
                                                    </h3>
                                                    <button type="button"  onClick={popUpShipping} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <div className="w-full mx-auto" style={{ height:"240px" , overflowY:"scroll"}}>
                                                    <div className="mx-10">
                                                        <div className="flex mt-4 justify-between" style={{ borderBottom:"1px solid #cacaca"}}>
                                                            <div className="mb-3">
                                                                <p>Number of items(weight)</p>
                                                            </div>
                                                            <div className="mb-3">
                                                                <p>1 item(1.20kg)</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-3">
                                                            <div className="my-2.5">
                                                                <input style={{ width:"22px" ,border:"1px solid #ebebeb"}} type="radio" />
                                                            </div>
                                                            <div className="w-5/5">
                                                                <div className="flex my-2 justify-between" style={{ color:"#08CCCA" , fontSize:"18px"}}>
                                                                    <div className="text-left">
                                                                        <p>International Shipping</p>
                                                                    </div>
                                                                    <div className="text-right">
                                                                        <p>$47.14</p>
                                                                    </div>
                                                                </div>
                                                                <p className="my-0 py-0" style={{ fontSize:"14px" , color:"#a9a9a9"}}>
                                                                    Shipping will usually start within 7 - 14 business days for products.
Once shipping starts, your order can be tracked by following the steps below:
Weverse Shop app > My > My Orders > Order Detail
For pre-orders, the shipping will start on the day indicated in the announcement.
(The shipping fee may vary depending on your area and the volume of the product. Please check the exact shipping fee at checkout.)
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mx-6 py-7">
                                                    <a>
                                                        <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</button>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div>
                                        <div className="flex">
                                            <p>International shipping</p>
                                            <p>($47.14)</p>
                                        </div>
                                        <div className="w-8/12 my-2"  style={{ fontSize:"14px"}}>
                                            <span style={{ color:"#a6a6a6"}}>Shipping will usually start within 7 - 14 business days for products.
                                                Once shipping starts, your order can be tracked by following the steps below:
                                                Weverse Shop app > My > My Orders > Order Detail
                                                For pre-orders, the shipping will start on the day indicated in the announcement.
                                                (The shipping fee may vary depending on your area and the volume of the product. Please check the exact shipping fee at checkout.)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8">
                                <div className="my-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Weverse Shop Cash</h2>
                                </div>
                                <div>
                                    {customer.map((customerItem) => {
                                        return(
                                            <div>
                                                <div className="flex gap-2">
                                                    <input className="py-2  px-2 w-3/12" placeholder={`$ ${customerItem.cash}`} disabled style={{ background:"#FAFBFC" , border:"1px solid #ADB1B8" , borderRadius:"4px"}} type="text"/>
                                                    <button className="px-4 font-normal" style={{ color:"#717172",  background:"#FAFBFC" , border:"1px solid #ADB1B8" , borderRadius:"4px"}}>Use All</button>
                                                </div>
                                                <div className="my-2">
                                                    <div className="flex gap-2">
                                                        <p style={{ color:"#919191"}}>Available now</p>
                                                        <p style={{ color:"#3ECCCD"}}>$ ${customerItem.cash}</p>
                                                    </div>
                                                    <div className="flex gap-2 my-1">
                                                        <input type="radio"/>
                                                        <p>Always use the entire Cash</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            <div>
                                <div className="my-3 text-left">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Order Summary</h2>
                                </div>
                                <div className="flex my-6 justify-between" style={{ fontSize:"17px"}} >
                                    <div className="text-left">
                                        <p>Subtotal ({qty} item)</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">${total}</p>
                                    </div>
                                </div>
                                <div className="flex my-6 justify-between" style={{ fontSize:"17px"}}>
                                    <div className="text-left">
                                        <p>Shipping Fee</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">$47.14</p>
                                    </div>
                                </div>
                                <div className="flex my-6 justify-between" style={{ fontSize:"17px"}}>
                                    <div className="text-left">
                                        <p>Discount (Weverse Shop Cash)</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">$0.00</p>
                                    </div>
                                </div>
                                <div className="flex py-5 mt-6 justify-between" style={{ background:"#FFFEED" , border:"1px solid #F7F6DE" , fontSize:"20px"}}>
                                    <div className="text-left">
                                        <p className="font-bold">Grand Total</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">${parseFloat(total) + 47.14}</p>
                                    </div>
                                </div>
                                <div className="flex my-3 justify-between" style={{ color:"#05C46B"}} >
                                    <div className="text-left">
                                        <p >Earned Weverse Shop Cash</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">$0.20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            <div className="text-left">
                                <div className="my-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Payment Method</h2>
                                </div>
                                <div>
                                   <ul>
                                       {payment.map((itemPayment) => {
                                           return(
                                               <li className="flex gap-3 pt-3 pb-4" style={{ borderBottom:"1px solid #F1F1F1"}}>
                                                   <input style={{ border:"1px solid #6B6B6B" , cursor:"pointer",  width:"20px"}}
                                                          type="radio"
                                                          name={itemPayment.name}
                                                          value={itemPayment.id}
                                                          checked={seletectedPayment?.id === itemPayment.id}
                                                          onChange={() => handlerPaymentSelect(itemPayment)}
                                                   />
                                                   <div className="" style={{ height:"35px"}}>
                                                       <img className="h-full" src={itemPayment.image}/>
                                                   </div>
                                               </li>
                                           )
                                       })}
                                   </ul>
                                    <div className="flex gap-2 my-4" style={{ color:"#bdbdbd"}}>
                                        <i className="fa-solid my-auto fa-info-circle"></i>
                                        <p>Only the payment methods supported for your current preferences for Weverse Shop and currency are shown here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            {paymentInfo.map((itemsInfo) => {
                                return(
                                    <>
                                        <div className="text-left">
                                            <div className="my-3">
                                                <h2 className="font-bold" style={{ fontSize:"20px"}}>Notice & Agreements</h2>
                                            </div>
                                            <div className="mb-6" style={{ borderBottom:"1px solid #E2E2E2"}}>
                                                <ul className="mb-6">
                                                        {itemsInfo.agreements.map((itemInfo)=>{
                                                            return(
                                                                <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>{itemInfo.agreements}</li>
                                                            )
                                                        })}
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <ul>
                                                {itemsInfo.notices.map((itemInfo)=>{
                                                    return(
                                                <li>
                                                    <div className="flex my-8 justify-between" style={{ fontSize:"15px" , color:"#696969" }}>
                                                        <div className="text-left">
                                                            <span>{itemInfo.notice}</span>
                                                        </div>
                                                        <div className="text-right">
                                                            <a style={{ textDecoration:"underline"}}>Read more</a>
                                                        </div>
                                                    </div>
                                                </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    </>
                                )
                            })}
                            <div className="text-center mt-14">
                                <div className="flex gap-2 justify-center mx-auto text-center">
                                    <input style={{ width:"20px"}} type="radio"/>
                                    <p>I agree to all the terms shown above.</p>
                                </div>
                                <button className=" my-8 w-2/12 py-3 text-white font-semibold" style={{borderRadius:"4px", background:"#08CCCA"}}>Pay $64.20</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}