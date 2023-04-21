// import {CartCardComponent} from "./Card/CartCard.Component";
import {useEffect, useState} from "react";
import {CartCardComponent} from "./Card/CartCard.Component";
import {Link} from "react-router-dom";

export const CartListComponent = ({user_id}) => {

    const [cart , setCart] = useState([]);
    useEffect(() =>{
        // get data from API
        fetch(`http://127.0.0.1:8000/api/cart/${user_id}`)
            //     // make respionse to jsonn
            .then((response) => response.json())
            .then((cart => setCart(cart)));
    }, [])

    const [artist , setArtist] = useState([])
    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/artist")
            .then((response) => response.json())
            .then(artist => setArtist(artist))
    } ,[])

    const popUpArtist = () => {
        const popUp = document.getElementById('pop_up_artist');
        if(popUp.style.display === 'none'){
            popUp.style.display = 'block'
            console.log("berhasi dom")
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
            console.log("berhasi dom")
        }
    }


    const [total , setTotal] = useState('0');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cart/total/price/${user_id}`)
            .then((response) => response.json())
            .then(total => setTotal(total))
    } , [total])

    const [qty , setQty] = useState('0');
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/cart/total/item/${user_id}`)
            .then((response) => response.json())
            .then(qty => setQty(qty))
    } , [qty])

    const checkIsEmpty = cart.length === 0;
    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const cartItemString =  JSON.stringify(cart);
    localStorage.setItem("carts", cartItemString);

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
                            <a href={`/cart/${user.id}/remove/sold`} className="px-2 my-auto py-1 " style={{ border:"1px solid #afafaf" , fontSize:"14px", borderRadius:"6px" , color:"#afafaf"}}>
                            Remove sold out
                            </a>
                            </div>
                        )}
                        </div>
                        {checkIsEmpty ? (
                            <>
                                <div className="py-24">
                                    <h2 className="text-center font-medium" style={{ color:"#bdbdbd"}}>Your cart is empty.</h2>
                                    <button className="w-2/12 my-4 font-medium py-2 " onClick={popUpArtist} style={{ color:"white" ,background:"#40CDCC", borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC"}}>Shop Now</button>
                                </div>
                                <div id="pop_up_artist" tabIndex="-1" onclose={popUpArtist}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                    <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"33%"}}>
                                        <div className="relative bg-white w-8/12 top-16 rounded-lg shadow dark:bg-gray-700" style={{ height:"500px"}} >
                                            <div className="flex items-start justify-end py-7 px-4 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-bold w-full ms-5 font-semibold text-center text-gray-900 dark:text-white">
                                                    Select Shop
                                                </h3>
                                                <button type="button"  onClick={popUpArtist} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
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
                            </>
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
                                            <h2 className="my-auto font-bold" style={{ fontSize:"20px"}}>Total (${qty} item)</h2>
                                        </div>
                                        <div className="flex gap-6">
                                            <h2 className="my-auto font-bold" style={{ fontSize:"20px"}}>${total}</h2>
                                            <a href={`/order/checkout/`}>
                                                <button className="w-full font-medium px-8 py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"14px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Check Out</button>
                                            </a>
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