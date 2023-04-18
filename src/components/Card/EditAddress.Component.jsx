import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";

export const EditAddressComponent = () => {

    const params = useParams();
    const navigation = useNavigate();
    const [editData, setEditData] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/my/address/edit/${params.id}`)
            .then((response) => response.json())
            .then(editData => setEditData(editData))
    }, [params.id]);


    let [name , setName] = useState('');
    useEffect(() => {
       let reciver = editData[0]?.receiver || '';
       setName(reciver)
    }, [editData]);
    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name)
        console.log(name)
    }

    const [lastname , setLastname] = useState('');
    useEffect(() => {
        let reciver = editData[0]?.lastname || '';
        setLastname(reciver)
    }, [editData]);
    const onChangeLastname = (event) =>{
        const lastname = event.target.value;
        setLastname(lastname)
    }

    const [contact , setContact] = useState('');
    useEffect(() => {
        let contact = editData[0]?.phone_number || '';
        setContact(contact)
    }, [editData]);
    const onChangeContact = (event) => {
        const contact = event.target.value;
        setContact(contact)
    }

    const [city , setCity] = useState('');
    useEffect(() => {
        let city = editData[0]?.city || '';
        setCity(city)
    }, [editData]);
    const onChangeCity = (event) => {
        const city = event.target.value;
        setCity(city)
    }

    const [state , setState] = useState('');
    useEffect(() => {
        let state = editData[0]?.state || '';
        setState(state)
    }, [editData]);
    const onChangeState = (event) =>{
        const state = event.target.value;
        setState(state)
    }

    const [postal  , setPostal] = useState('');
    useEffect(() => {
        let postcode = editData[0]?.postcode || '';
        setPostal(postcode)
    }, [editData]);
    const onChangePostal = (event) => {
        const postal = event.target.value;
        setPostal(postal)
    }

    const [country , setCountry] = useState('');
    useEffect(() => {
        let country = editData[0]?.country || '';
        setCountry(country)
    }, [editData]);
    const onChangeCountry = (event) =>{
        const country = event.target.value;
        setCountry(country)
    }

    let [address , setAddress] = useState('');
    useEffect(() => {
        let street = editData[0]?.street || '';
        setAddress(street);
    }, [editData]);

    const onChangeAddress = (event) => {
        const address = event.target.value;
        setAddress(address);
    };


    // const ids = editData[0].id;
    // const receivers = editData[0].receiver;

    // const phone_numbers = editData[0].phone_number;
    // const postcodes = editData[0].postcode;
    // const countrys = editData[0].country;
    // const citys = editData[0].city;
    // const states = editData[0].state;



    const [accept , setAccept] = useState(false);
    const [isdefault , setIsDefault] = useState(false);



    const onChangeAccept = (event) =>{
        const accept = event.target.value;
        setAccept(accept)
    }

    const onChangeDafault = (event) => {
        const isDefault = event.target.value;
        setIsDefault(isDefault)
    }


    return(
        <>
            <div id="pop_up_address_edit" tabIndex="-1" style={{ background:"rgba(75,75,75,0.67)" }} className="fixed z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full">
                {/* onclose={popUpAddressEdit}*/}
                <div className="absolute w-6/12 mx-auto h-full max-w-2xl md:h-auto" style={{ left:"32%"}}>
                    <div className="relative bg-white w-9/12 top-8 rounded-lg shadow dark:bg-gray-700" style={{ height:"550px"}} >
                        <div className="flex items-start justify-end py-6 px-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-bold w-full ms-5 font-bold text-center text-gray-900 dark:text-white">
                                Edit Shipping Address
                            </h3>
                            <button type="button"  onClick={navigation(-1)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
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
                                    <input className="w-full py-3 my-1 font-light px-3" value={name} onChange={onChangeName} required style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter name (English)" type="text"/>
                                    <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>Last name/first name of the receiver must match their last name/first name on the passport.</span>
                                </div>
                                <div className="text-left my-6">
                                    <span className="" style={{ fontSize:"14px"}}>Lastname</span>
                                    <input className="w-full py-3 my-1 font-light px-3" value={lastname} onChange={onChangeLastname} required style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter last name (English)" type="text"/>
                                </div>
                                <div className="text-left my-6 gap-6 block">
                                    <div>
                                        <span className="" style={{ fontSize:"14px"}}>Address</span>
                                        <input className="w-full py-3 my-1 font-light px-3" value={address} onChange={onChangeAddress} required style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter street address (English)" type="text"/>
                                    </div>
                                    <div className="mt-4">
                                        <input className="w-full py-3 my-1 font-light px-3" style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Detailed address (Option, English)" type="text"/>
                                        <span className="my-0 py-0" style={{ fontSize:"13px" , color:"#b2b1b1"}}>If you enter the same text for your street address and your detailed address, we may not be able to correctly deliver your order.</span>
                                    </div>
                                </div>
                                <div className="text-left my-6">
                                    <span className="" style={{ fontSize:"14px"}}>City</span>
                                    <input className="w-full py-3 my-1 font-light px-3" value={city} onChange={onChangeCity} required  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter city" type="text"/>
                                </div>
                                <div className="text-left my-6">
                                    <span className="" style={{ fontSize:"14px"}}>State</span>
                                    <input className="w-full py-3 my-1 font-light px-3" value={state} onChange={onChangeState} required  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter state, province, or region" type="text"/>
                                </div>
                                <div className="text-left my-6">
                                    <span className="" style={{ fontSize:"14px"}}>Country/Regional</span>
                                    <input className="w-full py-3 my-1 font-light px-3" value={country} onChange={onChangeCountry} required  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter state, province, or region" type="text"/>
                                </div>
                                <div className="text-left my-6">
                                    <span className="" style={{ fontSize:"14px"}}>Postal Code</span>
                                    <input className="w-full py-3 my-1 font-light px-3" value={postal} onChange={onChangePostal} required  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter postal code" type="text"/>
                                </div>
                                <div className="text-left my-6">
                                    <span className="" style={{ fontSize:"14px"}}>Phone Number</span>
                                    <input className="w-full py-3 my-1 font-light px-3" value={contact} onChange={onChangeContact} required  style={{ border:"1px solid #ebebeb" , borderRadius:"4px" , color:"#9d9d9d"}} placeholder="Enter phone number" type="number"/>
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
                            {/*http://127.0.0.1:8000/api/my/address/new/81*/}
                            <a href={`http://127.0.0.1:8000/api/my/address/edit/p/${params.id}?name=${name}&lastname=${lastname}&address=${address}&city=${city}&state=${state}&country=${country}&postal=${postal}&contact=${contact}`}>
                            <button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}