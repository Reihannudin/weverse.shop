import {Link} from "react-router-dom";

export const AddressListComponent = () => {

    const popUpAddress = () => {
        const popUp = document.getElementById('pop_up_address');
        if(popUp.style.display === 'none'){
            popUp.style.display = 'block'
            console.log("berhasi dom")
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
            console.log("berhasi dom")
        }
    }

    const popUpAddressEdit = () => {
        const popUp = document.getElementById('pop_up_address_edit');
        if (popUp.style.display === 'none'){
            popUp.style.display = 'block'
            console.log("berhasi dom")
        } else if (popUp.style.display === 'block'){
            popUp.style.display = 'none'
            console.log("berhasi dom")
        }
    }

    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 ">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Shipping Address</h2>
                            </div>

                        </div>
                        <div>
                            <div className="py-14">
                                <ul>
                                    <li>
                                        <div>
                                          <div className="flex justify-between pb-5" style={{ borderBottom:"1px solid #ebebeb"}} >
                                              <div className="w-8/12 font-normal" >
                                                  <div className="flex gap-2" style={{ color:"#08C2CC"}}>
                                                      <p>Andrian Raihannudin Andrian Raihannudin</p>
                                                      <p className="px-2 my-auto" style={{ border:"1px solid #08C2CC" , borderRadius:"16px" , fontSize:"12px"}}>DEFAULT</p>
                                                  </div>
                                                  <div className="text-left mt-1 mb-0 py-0">
                                                      <p className="my-0 py-0" style={{ fontSize:"17px"}}>Grand catania block O5/39, Ciakar, Panongan,Kab.Tangerang,Banten kab.Tangerang, Banten
                                                          15710</p>
                                                  </div>
                                                  <div className="text-left my-0 py-0" style={{ fontSize:"16px"}}>
                                                      <p className="my-0 py-0">Indonesia</p>
                                                      <p className="my-0 py-0">+62 87773301182</p>
                                                  </div>
                                              </div>
                                              <div className="w-4/12">
                                                  <div className="flex text-right  gap-5">
                                                      <button  onClick={popUpAddressEdit}  style={{ border:"1px solid #888B8B" , color:"#888B8B" , fontSize:"14px" , borderRadius:"6px" }}  className="px-3  py-1  ms-auto me-0" >Edit</button>
                                                      <div id="pop_up_address_edit" tabIndex="-1" onclose={popUpAddressEdit}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                                          <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"32%"}}>
                                                              <div className="relative bg-white w-9/12 top-8 rounded-lg shadow dark:bg-gray-700" style={{ height:"550px"}} >
                                                                  <div className="flex items-start justify-end py-6 ms-3 px-4 border-b rounded-t dark:border-gray-600">
                                                                      <button type="button" className="text-gray-400 mb-2 gap-2 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                                          <i className="fa-solid fa-trash"></i>
                                                                          <span style={{ fontSize:"16px"}}>Delete</span>
                                                                      </button>
                                                                      <h3 className="text-xl font-bold w-full ms-10 font-bold text-left text-gray-900 dark:text-white">
                                                                          Edit Shipping Address
                                                                      </h3>
                                                                      <button type="button"  onClick={popUpAddressEdit} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                                          <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                                          <span className="sr-only">Close modal</span>
                                                                      </button>
                                                                  </div>
                                                                  <div className="w-5/5 mx-auto" style={{ height:"370px" , overflowY:"scroll"}}>
                                                                      <div className="mx-10">
                                                                          <div className="flex my-5 gap-2">
                                                                              <input type="radio" style={{width:"18px"}}/>
                                                                              <p style={{ fontSize:"16px"}}>Set as default shipping address</p>
                                                                          </div>
                                                                          <div className="text-left my-6">
                                                                              <span className="" style={{ fontSize:"14px"}}>Name</span>
                                                                              <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter first name (English)" type="text"/>
                                                                              <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>Last name/first name of the receiver must match their last name/first name on the passport.</span>
                                                                          </div>
                                                                          <div className="text-left my-6">
                                                                              <span className="" style={{ fontSize:"14px"}}>Lastname</span>
                                                                              <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter last name (English)" type="text"/>
                                                                          </div>
                                                                          <div className="text-left my-6 gap-6 block">
                                                                              <div>
                                                                                  <span className="" style={{ fontSize:"14px"}}>Address</span>
                                                                                  <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter street address (English)" type="text"/>
                                                                              </div>
                                                                              <div className="mt-4">
                                                                                  <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Detailed address (Option, English)" type="text"/>
                                                                                  <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>If you enter the same text for your street address and your detailed address, we may not be able to correctly deliver your order.</span>
                                                                              </div>
                                                                          </div>
                                                                          <div className="text-left my-6">
                                                                              <span className="" style={{ fontSize:"14px"}}>City</span>
                                                                              <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter city" type="text"/>
                                                                          </div>
                                                                          <div className="text-left my-6">
                                                                              <span className="" style={{ fontSize:"14px"}}>State</span>
                                                                              <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter state, province, or region" type="text"/>
                                                                          </div>
                                                                          <div className="text-left my-6">
                                                                              <span className="" style={{ fontSize:"14px"}}>Postal Code</span>
                                                                              <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter postal code" type="text"/>
                                                                          </div>
                                                                          <div className="text-left my-6">
                                                                              <span className="" style={{ fontSize:"14px"}}>Phone Number</span>
                                                                              <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter phone number" type="number"/>
                                                                              <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>Please enter a valid phone number</span>
                                                                          </div>
                                                                          <div>
                                                                              <div className="flex justify-between" style={{ fontSize:"14px"}}>
                                                                                  <div className="text-left">
                                                                                      <p>Privacy Police</p>
                                                                                  </div>
                                                                                  <div className="text-right underline" style={{ color:"#b9b9b9"}}>
                                                                                      <a>Read more</a>
                                                                                  </div>
                                                                              </div>
                                                                              <div className="flex text-left my-5 gap-4">
                                                                                  <input type="radio" style={{width:"18px"}}/>
                                                                                  <p style={{ fontSize:"17px"}}>I consent to the Terms of Use above and would like to enter the shipping address</p>
                                                                              </div>
                                                                          </div>
                                                                      </div>
                                                                  </div>
                                                                  <div className="mx-6 py-7">
                                                                      <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</button>
                                                                  </div>
                                                              </div>
                                                          </div>
                                                      </div>
                                                      <button style={{ border:"1px solid #888B8B" , color:"#888B8B" , fontSize:"14px" , borderRadius:"6px" }} className=" px-3  py-1 ms-0 me-0">Delete</button>
                                                  </div>
                                              </div>
                                          </div>
                                            <div className="flex gap-2 my-1" style={{ color:"#bebebe"}}>
                                                <i className="fa-solid my-auto fa-info-circle"></i>
                                                <p style={{ fontSize:"14px"}}>You can add up to 10 shipping addresses.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <button className="w-2/12 my-7 font-medium px-8 py-3" onClick={popUpAddress} style={{ background:"#40CDCC" , borderRadius:"4px" , fontSize:"16px" , color:"white" , border:"1px solid #40CDCC"}}>Add</button>
                                <div id="pop_up_address" tabIndex="-1" onclose={popUpAddress}  style={{ display:"none" , background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                                    <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"32%"}}>
                                        <div className="relative bg-white w-9/12 top-8 rounded-lg shadow dark:bg-gray-700" style={{ height:"550px"}} >
                                            <div className="flex items-start justify-end py-6 px-4 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-bold w-full ms-5 font-bold text-center text-gray-900 dark:text-white">
                                                    Add Shipping Address
                                                </h3>
                                                <button type="button"  onClick={popUpAddress} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div className="w-5/5 mx-auto" style={{ height:"370px" , overflowY:"scroll"}}>
                                                <div className="mx-10">
                                                    <div className="flex my-5 gap-2">
                                                        <input type="radio" style={{width:"18px"}}/>
                                                        <p style={{ fontSize:"16px"}}>Set as default shipping address</p>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <span className="" style={{ fontSize:"14px"}}>Name</span>
                                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter first name (English)" type="text"/>
                                                        <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>Last name/first name of the receiver must match their last name/first name on the passport.</span>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <span className="" style={{ fontSize:"14px"}}>Lastname</span>
                                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter last name (English)" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6 gap-6 block">
                                                        <div>
                                                            <span className="" style={{ fontSize:"14px"}}>Address</span>
                                                            <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter street address (English)" type="text"/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Detailed address (Option, English)" type="text"/>
                                                            <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>If you enter the same text for your street address and your detailed address, we may not be able to correctly deliver your order.</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <span className="" style={{ fontSize:"14px"}}>City</span>
                                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter city" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <span className="" style={{ fontSize:"14px"}}>State</span>
                                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter state, province, or region" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <span className="" style={{ fontSize:"14px"}}>Postal Code</span>
                                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter postal code" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <span className="" style={{ fontSize:"14px"}}>Phone Number</span>
                                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter phone number" type="number"/>
                                                        <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>Please enter a valid phone number</span>
                                                    </div>
                                                    <div>
                                                        <div className="flex justify-between" style={{ fontSize:"14px"}}>
                                                            <div className="text-left">
                                                                <p>Privacy Police</p>
                                                            </div>
                                                            <div className="text-right underline" style={{ color:"#b9b9b9"}}>
                                                                <a>Read more</a>
                                                            </div>
                                                        </div>
                                                        <div className="flex text-left my-5 gap-4">
                                                            <input type="radio" style={{width:"18px"}}/>
                                                            <p style={{ fontSize:"17px"}}>I consent to the Terms of Use above and would like to enter the shipping address</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mx-6 py-7">
                                                <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</button>
                                            </div>
                                        </div>
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

// {artist.map((item) => {
//     return(
//         <li className="mx-3 my-5 list-none">
//             <div className="w-full block gap-4">
//                 <div className="flex gap-2">
//                     <div style={{ width:"28px" ,height:"28px" , borderRadius:"100%"}}>
//                         <img style={{  borderRadius:"100%"}} className="w-full h-full" src={item.image} alt={item.name} />
//                     </div>
//                     <h3 style={{ fontSize:"18px"}} className="font-normal">{item.name}</h3>
//                 </div>
//                 <div className="my-3">
//                     <div className="flex gap-4">
//                         <button className="px-3 py-1 " style={{ border:"1px solid #ebebeb" , borderRadius:"18px"}}>
//                             <Link to="">
//                                 <div className="flex gap-2">
//                                     <div>
//                                         <i style={{ fontSize:"16px" , color:"rgba(97,255,216,0.78)"}} className="fa-solid fa-globe"></i>
//                                     </div>
//                                     <p className="my-auto" style={{ fontSize:"14px"}}>GLOBAL</p>
//                                 </div>
//                             </Link>
//                         </button>
//                         <button className="px-3 py-1 " style={{ border:"1px solid #ebebeb" , borderRadius:"18px"}}>
//                             <Link to="">
//                                 <div className="flex gap-2">
//                                     <div>
//                                         <i style={{ fontSize:"16px" , color:"rgba(97,255,216,0.78)"}} className="fa-solid fa-globe"></i>
//                                     </div>
//                                     <p className="my-auto" style={{ fontSize:"14px"}}>USA</p>
//                                 </div>
//                             </Link>
//                         </button>
//                         <button className="px-3 py-1 " style={{ border:"1px solid #ebebeb" , borderRadius:"18px"}}>
//                             <Link to="">
//                                 <div className="flex gap-2">
//                                     <div>
//                                         <i style={{ fontSize:"16px" , color:"rgba(97,255,216,0.78)"}} className="fa-solid fa-globe"></i>
//                                     </div>
//                                     <p className="my-auto" style={{ fontSize:"14px"}}>JAPAN</p>
//                                 </div>
//                             </Link>
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </li>
//     )
// })}