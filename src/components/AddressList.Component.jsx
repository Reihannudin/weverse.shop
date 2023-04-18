import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import bcrypt from "bcryptjs";

export const AddressListComponent = () => {

    const [name , setName] = useState('');
    const [lastname , setLastname] = useState('');
    const [address , setAddress] = useState('');
    const [city , setCity] = useState('');
    const [state , setState] = useState('');
    const [country , setCountry] = useState('');
    const [postal  , setPostal] = useState('');
    const [contact , setContact] = useState('');
    const [accept , setAccept] = useState(false);
    const [isdefault , setIsDefault] = useState(false);

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name)
        console.log(name)
    }

    const onChangeLastname = (event) =>{
        const lastname = event.target.value;
        setLastname(lastname)
    }

    const onChangeAddress = (event) => {
        const address = event.target.value;
        setAddress(address)
    }

    const onChangeCity = (event) => {
        const city = event.target.value;
        setCity(city)
    }

    const onChangeState = (event) =>{
        const state = event.target.value;
        setState(state)
    }

    const onChangeCountry = (event) =>{
        const country = event.target.value;
        setCountry(country)
    }

    const onChangePostal = (event) => {
        const postal = event.target.value;
        setPostal(postal)
    }

    const onChangeContact = (event) => {
        const contact = event.target.value;
        setContact(contact)
    }

    const onChangeAccept = (event) =>{
        const accept = event.target.value;
        setAccept(accept)
    }

    const onChangeDafault = (event) => {
        const isDefault = event.target.value;
        setIsDefault(isDefault)
    }


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

    function popUpAddressEdit(itemId) {
        console.log(itemId);
                const popUp = document.getElementById("pop_up_address_edit");
                if (popUp.style.display === "none") {
                    popUp.style.display = "block";
                    console.log("berhasil dom");
                } else if (popUp.style.display === "block") {
                    popUp.style.display = "none";
                    console.log("berhasil dom");
                }
    }


    const user = JSON.parse(localStorage.getItem('whoLogin'));

    const [listAddress , setListAddress] = useState([]);
    // http://127.0.0.1:8000/api/my/address/81
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/my/address/${user.id}`)
            .then((response) => response.json())
            .then(listAddress => setListAddress(listAddress))
    } , [listAddress])


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
                            <div className="pb-14 pt-8">
                                <ul>
                                    {listAddress.map((item) => {
                                        return(
                                            <li className="my-6">
                                                <div>
                                                    <div className="flex justify-between pb-5" style={{ borderBottom:"1px solid #ebebeb"}} >
                                                        <div className="w-8/12 font-normal" >
                                                            <div className="flex gap-2" style={{ color:"#08C2CC"}}>
                                                                <p>{item.receiver + ' ' + item.lastname}</p>
                                                                <p className="px-2 my-auto" style={{ border:"1px solid #08C2CC" , borderRadius:"16px" , fontSize:"12px"}}>DEFAULT</p>
                                                            </div>
                                                            <div className="text-left mt-1 mb-0 py-0">
                                                                <p className="my-0 py-0" style={{ fontSize:"17px"}}>{item.street}, {item.city}, {item.state}, {item.postcode}                                                           </p>
                                                            </div>
                                                            <div className="text-left my-0 py-0" style={{ fontSize:"16px"}}>
                                                                <p className="my-0 py-0">{item.country}</p>
                                                                <p className="my-0 py-0">{item.phone_number}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-4/12">
                                                            <div className="flex text-right  gap-5">
                                                                <a href={`http://localhost:3000/my/addresses/edit/${item.id}`}  style={{ border:"1px solid #888B8B" , color:"#888B8B" , fontSize:"14px" , borderRadius:"6px" }}  className="px-3  py-1  ms-auto me-0" >Edit</a>
                                                                <a href={`http://127.0.0.1:8000/api/my/address/remove/${item.id}`}>
                                                                    <button style={{ border:"1px solid #888B8B" , color:"#888B8B" , fontSize:"14px" , borderRadius:"6px" }} className=" px-3  py-1 ms-0 me-0">Delete</button>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <div className="flex gap-2 my-1" style={{ color:"#bebebe"}}>
                                    <i className="fa-solid my-auto fa-info-circle"></i>
                                    <p style={{ fontSize:"14px"}}>You can add up to 10 shipping addresses.</p>
                                </div>
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
                                                        <label className="" style={{ fontSize:"14px"}}>Name</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={name} onChange={onChangeName} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter first name (English)" type="text"/>
                                                        <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>Last name/first name of the receiver must match their last name/first name on the passport.</span>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <label className="" style={{ fontSize:"14px"}}>Lastname</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={lastname} onChange={onChangeLastname} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter last name (English)" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6 gap-6 block">
                                                        <div>
                                                            <label className="" style={{ fontSize:"14px"}}>Address</label>
                                                            <input className="w-full py-3 my-1 font-light px-3" value={address} onChange={onChangeAddress} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter street address (English)" type="text"/>
                                                        </div>
                                                        <div className="mt-4">
                                                            <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Detailed address (Option, English)" type="text"/>
                                                            <span className="my-0 py-0"  style={{ fontSize:"13px" , color:"#b2b1b1"}}>If you enter the same text for your street address and your detailed address, we may not be able to correctly deliver your order.</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <label className="" style={{ fontSize:"14px"}}>City</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={city} onChange={onChangeCity} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter city" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <label className="" style={{ fontSize:"14px"}}>State</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={state} onChange={onChangeState} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter state, province, or region" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <label className="" style={{ fontSize:"14px"}}>Country/Regional</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={country} onChange={onChangeCountry} required  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter state, province, or region" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <label className="" style={{ fontSize:"14px"}}>Postal Code</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={postal} onChange={onChangePostal} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter postal code" type="text"/>
                                                    </div>
                                                    <div className="text-left my-6">
                                                        <label className="" style={{ fontSize:"14px"}}>Phone Number</label>
                                                        <input className="w-full py-3 my-1 font-light px-3" value={contact} onChange={onChangeContact} style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter phone number" type="number"/>
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
                                                <a href={`http://127.0.0.1:8000/api/my/address/new/${user.id}?name=${name}&lastname=${lastname}&address=${address}&city=${city}&state=${state}&country=${country}&postal=${postal}&contact=${contact}`}>
                                                    <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</button>
                                                </a>
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