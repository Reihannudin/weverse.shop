import {Link} from "react-router-dom";
import {CartCardComponent} from "./Card/CartCard.Component";
import {CheckoutProductListComponent} from "./Card/CheckoutProductList.Component";


export const CheckoutListComponent = () => {

    const popUpShipping = () => {
        const popUp = document.getElementById('pop_up_shipping')
        if(popUp.style.display === 'none'){
            popUp.style.display = 'block'
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
        }
    }

    const popUpCustomer = () => {
        const popUp = document.getElementById('pop_up_customer')
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
                                        <CheckoutProductListComponent />
                                    </div>
                                    <div className="flex justify-between">
                                        <div>
                                            <p>Total (1 item)</p>
                                        </div>
                                        <div className="font-bold">
                                            <p>$17.18</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-left">
                            <div className="my-8">
                                <div className="flex my-4 gap-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Shipping Address</h2>
                                    <button className="py-1 px-3" style={{ border:"1px solid #CACACA" , color:"#a8a8a8" , borderRadius:"4px" , fontSize:"15px"}}>Change</button>
                                </div>
                                <div>
                                    <div>
                                        <div className="flex gap-2">
                                            <p>Andrian </p>
                                            <p>Raihannudin</p>
                                        </div>
                                        <div  className="flex ">
                                            <p>Grand catania block O5/39, Ciakar, Panongan</p>
                                            <p>, Kab.Tangerang</p>
                                            <p>, Banten</p>
                                        </div>
                                        <div>
                                            <p>15710</p>
                                        </div>
                                        <div>
                                            <p>Indonesia</p>
                                        </div>
                                        <div>
                                            <p>+62 87773301182</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="my-8">
                                <div className="flex my-4 gap-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Customer</h2>
                                    <button className="py-1 px-3" onClick={popUpCustomer} style={{ border:"1px solid #CACACA" , color:"#a8a8a8" , borderRadius:"4px" , fontSize:"15px"}}>Edit</button>
                                    <div id="pop_up_customer" tabIndex="-1" onclose={popUpCustomer}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                        <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"32%"}}>
                                            <div className="relative bg-white w-9/12 top-8 rounded-lg shadow dark:bg-gray-700" style={{ height:"550px"}} >
                                                <div className="flex items-start justify-end py-6 px-4 border-b rounded-t dark:border-gray-600">
                                                    <h3 className="text-xl font-bold w-full ms-5 font-bold text-center text-gray-900 dark:text-white">
                                                        Add Shipping Address
                                                    </h3>
                                                    <button type="button"  onClick={popUpCustomer} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                        <span className="sr-only">Close modal</span>
                                                    </button>
                                                </div>
                                                <div className="w-5/5 mx-auto" style={{ height:"370px" , overflowY:"scroll"}}>
                                                    <div className="mx-10">
                                                        <div className="flex my-5 gap-2">
                                                            <input type="radio" style={{width:"18px"}}/>
                                                            <p style={{ fontSize:"16px"}}>Load Same info as Shipping Address</p>
                                                        </div>
                                                        <div className="text-left my-3">
                                                            <label className="" style={{ fontSize:"14px"}}>Name</label>
                                                            <input className="w-full py-3 my-1 font-light px-3"  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter first name (English)" type="text"/>
                                                        </div>
                                                        <div className="text-left my-3">
                                                            <label className="" style={{ fontSize:"14px"}}>Lastname</label>
                                                            <input className="w-full py-3 my-1 font-light px-3"  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter last name (English)" type="text"/>
                                                        </div>

                                                        <div className="text-left my-6">
                                                            <label className="" style={{ fontSize:"14px"}}>Emaily</label>
                                                            <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter city" type="email"/>
                                                        </div>
                                                        <div className="text-left my-3">
                                                            <label className="" style={{ fontSize:"14px"}}>Phone Number</label>
                                                            <input className="w-full py-3 my-1 font-light px-3"  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter phone number" type="number"/>
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
                                        <div className="flex gap-2">
                                            <p>Andrian </p>
                                            <p>Raihannudin</p>
                                        </div>
                                        <div>
                                            <p>reedbulls91@gmail.com</p>
                                        </div>
                                        <div>
                                            <p>+62 87773301182</p>
                                        </div>
                                    </div>
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
                                    <div>
                                        <div className="flex gap-2">
                                            <input className="py-2  px-2 w-3/12" placeholder="$0" style={{ background:"#FAFBFC" , border:"1px solid #ADB1B8" , borderRadius:"4px"}} type="text"/>
                                            <button className="px-4 font-normal" style={{ color:"#717172",  background:"#FAFBFC" , border:"1px solid #ADB1B8" , borderRadius:"4px"}}>Use All</button>
                                        </div>
                                        <div className="my-2">
                                           <div className="flex gap-2">
                                               <p style={{ color:"#919191"}}>Available now</p>
                                               <p style={{ color:"#3ECCCD"}}>$0.00</p>
                                           </div>
                                            <div className="flex gap-2 my-1">
                                                <input type="radio"/>
                                                <p>Always use the entire Cash</p>
                                            </div>
                                        </div>
                                    </div>
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
                                        <p>Subtotal (1 item)</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold">$17.18</p>
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
                                        <p className="font-bold">$17.18</p>
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
                                       <li className="flex gap-3 pt-3 pb-4" style={{ borderBottom:"1px solid #F1F1F1"}}>
                                           <input style={{ border:"1px solid #6B6B6B"}} type="radio"/>
                                           <div className="" style={{ height:"35px"}}>
                                               <img className="h-full" src="data:image/png;base64,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" />
                                           </div>
                                       </li>
                                       <li className="flex gap-3 pt-4  pb-4" style={{ borderBottom:"1px solid #F1F1F1"}}>
                                           <input style={{ border:"1px solid #6B6B6B"}} type="radio"/>
                                           <div className="" style={{ height:"35px"}}>
                                               <img className="h-full" src="data:image/png;base64,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"/>
                                           </div>
                                       </li>
                                       <li className="flex gap-3 pt-4  pb-4" style={{ borderBottom:"1px solid #F1F1F1"}}>
                                           <input style={{ border:"1px solid #6B6B6B"}} type="radio"/>
                                           <div className="" style={{ height:"40px"}}>
                                               <img className="h-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAA4CAMAAACcwwdBAAAAe1BMVEUAAAAAr1AAr1AAr0oAr1AAr0wAr1AAr0wAr1AAr00Ar1AAr00Ar1AAsk0AslAAsU4AsVAAr04Ar1AAsU4AsVAAsU4Ar04AsU4AsE8Ask8Ar04AsU4AsE8Ask8AsU4AsE8Ask8AsU4AsE8AsU8AsU4AsU8AsE8AsU8AsU8tpbITAAAAKHRSTlMAECAwMEBAUFBgYHBwcHB/f4CAgICPkJCfn6Cgr6+wv7/Az8/Q3+Dv0yJffwAABIVJREFUaN7tmM124kgMRlWKbVLAECohjsckGIfIdd//CWfhfzrdizTp05zhWxlhn9J1SSrJIjfddNNNN91001WqIi3xf5NHqnd37loB3KqKAFixuEaAdQRomgbA/LUBaAVxl4hTkWRZw28AMOj91esf8t+IG1m8RiBWXnV/EQCA5z/kv2lq46qFXgyAk/t+gArTLdhaRUSzvWHjn+kqhNVdR+pDCAs3BTipW+RFkY/BAnAoy7IsawCO3+6/B93Cy2hZ2jy327ROq7MNqkgz9xDPrAA6bC2QfjeAUSg8zYJqkttlCHsjcxXEQwh5DXHVAkRVgyZf+1ADq3MA0QgUQ502olX5AKTe+2x8j95/raJloK/9KvOjwYgb50NYuESNuFOfFyHVPTyIiFT3aljmVnkR7gbrFEAeoYvHfi8nVdqPdN1zXwLIOehkyYmeMW3XPcppuMZ018ZFpsZen1tr1VtnAIveredZZj9cEqBitab+rDhBtoWmLD9ST9R/IeZhb5Du2tdq7NWgzkMNlrxg5wBZ59a2dbypP9qL1QUBIumBvPtRVL1eJXAYcsN42nbX+kZ0xkLkmZMaMRtKsZGeAfg2hBYA7JyI6Cb2d1wIANKK0P1oxkCViuW+W2BBTMY8PxLWHMRjWmE6JEx4pDgDeAcOIgbQ52sSgfySAFp1BUQk64VJQ3LqamDOwY+HQ4YpJieSLXHwdc1RsTnAFmApCUzL3AaI3xxCgkmDNp0rFSHnMFlLQJqnBWymKSPQOpKqqmp7cJjIuvN4XBKSiwGcWD0Ox2UfQsL7FOBAKIcw6wFe1HjS9Mx63kqYipRtIA0qgfsLltEiG47LLMuy7B9MqKcAJaEcdql31Z14k1P4NYBp53BxBuAvBpAR3XHWsaypE/IpQCBfT25pXd1iTkdrhjniHCDunHw7gBgh6c+WriIuPcspwIJjNmlquhxA1+44WPcUC+rWkTyEEMLQ4J2H0GEEyC8AsCTqBt665RLDxNApgIvosa+YrgfYKOG+t25B9yzPymi/pRDHtlrjJwD6dQA5tt0Br6vUryowXVPIFEAeeVPD/J3qyjqAJ8mI7gWKVNMKnlJMPwVw89FmSwuQDI1SV1O/CqCGqQ4DzUkTos4BXORhuKNPYpEjb7Lrwn2jxpN8CiDHoX0Y2gov4uLQFrW78lUAUSOuJMvrpmkOC1lHNjIHkHt4kGXdxI9c+3ojopGj6v6j+di51HiTnwC07hWpjFOF77mKOxHtpoqvD5VHsCJ1IqKrqjueZgCyBPN3IuqrEUCS2D6niwre3M8AZDMrrV0VapuKoWL9DoDIcjIS14n8CCBjjE0AJta4+WEi+5wgag8gy9G6aX4PQCTbf0SIdd43Xffe3Xs3vwNimYn3EsLM2tRrJ78CEN33r0dlABj440Z+G+By3yf1848auszLMs9ExKlqz5us87Jcu7ZBuuYvxRnwfnVe++lgyKeD+d8tqi7J2uKq1wcAVK/Fa5vK17cB8sc/Ql5a09Pn5Qr9F5H7/UeEpt5dp/s33XTTTTfd9L/XfzuB4A9onqv4AAAAAElFTkSuQmCC"/>
                                           </div>
                                       </li>
                                       <li className="flex gap-3 pt-4  pb-4" style={{ borderBottom:"1px solid #F1F1F1"}}>
                                           <input style={{ border:"1px solid #6B6B6B"}} type="radio"/>
                                           <div className="" style={{ height:"35px"}}>
                                               <img className="h-full" src="data:image/png;base64,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"/>
                                           </div>
                                       </li>
                                       <li className="flex gap-3 pt-4  pb-4" style={{ borderBottom:"1px solid #F1F1F1"}}>
                                           <input style={{ border:"1px solid #6B6B6B"}} type="radio"/>
                                           <div className="" style={{ height:"35px"}}>
                                               <img className="h-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAAA4CAMAAACcwwdBAAAAjVBMVEUAAACfAGCfAHCfAGCfAGinAGifAGWlAGClAGWjAGSjAGOmAGOiAGKlAGKlAGWkAGKkAGSlAGSjAGSlAGSmAGSjAGOjAGWlAGOkAGWlAGOlAGWkAGOkAGSlAGWmAGOmAGWkAGSlAGSkAGSmAGSlAGSlAGSlAGWkAGOlAGOmAGWkAGOlAGOlAGOlAGSlAGQ7vedNAAAALnRSTlMAEBAgICAwMDBAUFBgYGBwcH+AgI+QkJCfn5+goK+vr7Cwv7/Az8/Q39/g4O/vkqilCAAAAmhJREFUaN7tmNFymzAQRa+CaY3rNoDtEMd242JwRQL6/8/rgyUkEBB1TDSTmb1PZFZX2aNdxCYAiUQikUgkEolEIrHHvBZ1uQsARDsuBD+trUWLJOdC1Pkusv1JXos6fwwARM9ciHK/shZF4/57FddCah/l6pF3EXTACrFtG0m+a3/k6r/7+I2tO0qMRdtu6BLoUFB+7Gc9/57NCDCWv5GBzchbAsZH/fE4Iw9myz8R41Jd8NsOtRkcJvxLyThQIz5XDYJ6IgE+wXiR/gm7WrMdip1mAlhPJXArQTDVIIdJ/wIAounyzvQGZKus3fqcVvJp182xSNOjComGAYDqjk10VIEqjl5NyNz0/2l65blXcr8XAKnKBWAyzdIsQHU7s436eQWAaQ+ORucb235T668hAITHeUsgN1sbpV4CyPRLoJqsCqVFEbwACI1kfspnaJhCbyWqB+nPzPJ+BsBCV4MDOBsHftNFBx0AVAeF7cXbzNlDHwPIBCrjyy0XMieARj92S9B4AnizEljphQ4ARsNJmQv9AZyNueZrAZRWwWOdgAPAm9XxB78tdLRuPa7vWAeAy5i/8AQQ96ef5P+uUfV5KVlvsvV1jbLu/KYn4x9uAO0kUfb8S08A7YdAiDxNn9vhr4IbQNtDQpxM/zwd5AIQDg9jv1wBPneYcwBo34KObgfoAoBsyJ/BH8DQzCwnIyeAoT9org8+AdjrSP5uAAgtgmsInwDGDC0TU+fnBgDW66JsrvN3BkBYGOnr988RAIiG/f4AgDAu3oVo/j6Zv94ZAFg+FY0Q78Vm/n9skUgkEolEIpFI3vUP1+Ru01xzv/sAAAAASUVORK5CYII="/>
                                           </div>
                                       </li>
                                   </ul>
                                    <div className="flex gap-2 my-4" style={{ color:"#bdbdbd"}}>
                                        <i className="fa-solid my-auto fa-info-circle"></i>
                                        <p>Only the payment methods supported for your current preferences for Weverse Shop and currency are shown here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            <div className="text-left">
                                <div className="my-3">
                                    <h2 className="font-bold" style={{ fontSize:"20px"}}>Notice & Agreements</h2>
                                </div>
                                <div className="mb-6" style={{ borderBottom:"1px solid #E2E2E2"}}>
                                    <ul className="mb-6">
                                        <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>You can pay with debit cards, credit cards, or make wire transfers (only from Japanese accounts).</li>
                                        <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>You can use the following credit cards: VISA, MASTER,  AMEX, and DISCOVER.</li>
                                        <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>You can pay with debit cards, credit cards, or make wire transfers (only from Japanese accounts).</li>
                                        <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>You can pay with debit cards, credit cards, or make wire transfers (only from Japanese accounts).</li>
                                        <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>You can pay with debit cards, credit cards, or make wire transfers (only from Japanese accounts).</li>
                                        <li style={{ fontSize:"14px" , listStyleType:"disc" , margin:"4px 18px" , color:"#8c8a8a"}}>You can pay with debit cards, credit cards, or make wire transfers (only from Japanese accounts).</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <div className="flex my-8 justify-between" style={{ fontSize:"15px" , color:"#696969" }}>
                                    <div className="text-left">
                                        <span>Agreement to Collection and Usage of Personal Information</span>
                                    </div>
                                    <div className="text-right">
                                        <a style={{ textDecoration:"underline"}}>Read more</a>
                                    </div>
                                </div>
                                <div className="flex my-8 justify-between" style={{ fontSize:"15px" , color:"#696969" }}>
                                    <div className="text-left">
                                        <span>Agreement to Collection and Usage of Personal Information</span>
                                    </div>
                                    <div className="text-right">
                                        <a style={{ textDecoration:"underline"}}>Read more</a>
                                    </div>
                                </div>
                                <div className="flex my-8 justify-between" style={{ fontSize:"15px" , color:"#696969" }}>
                                    <div className="text-left">
                                        <span>Agreement to Collection and Usage of Personal Information</span>
                                    </div>
                                    <div className="text-right">
                                        <a style={{ textDecoration:"underline"}}>Read more</a>
                                    </div>
                                </div>
                                <div className="flex my-8 justify-between" style={{ fontSize:"15px" , color:"#696969" }}>
                                    <div className="text-left">
                                        <span>Agreement to Collection and Usage of Personal Information</span>
                                    </div>
                                    <div className="text-right">
                                        <a style={{ textDecoration:"underline"}}>Read more</a>
                                    </div>
                                </div>
                                <div className="flex my-8 justify-between" style={{ fontSize:"15px" , color:"#696969" }}>
                                    <div className="text-left">
                                        <span>Agreement to Collection and Usage of Personal Information</span>
                                    </div>
                                    <div className="text-right">
                                        <a style={{ textDecoration:"underline"}}>Read more</a>
                                    </div>
                                </div>
                            </div>
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