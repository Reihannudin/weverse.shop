import {useState} from "react";
import bcrypt from "bcryptjs";

export const AddInformationCardComponent = () =>{
    const [name , setName] = useState('');
    const [contact , setContact] = useState('');
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const password = urlParams.get("password");

    const onChangeName = (event) => {
        const name = event.target.value;
        setName(name)
    }

    const onChangeContact = (event) => {
        const contact  = event.target.value;
        setContact(contact)
    }

    return(
        <>
            <div className="bg-white my-auto pb-12 pt-8  px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"18px"}}>
                        <img className="h-full" src="https://account.weverse.io/_next/static/images/63ef1d60aa3540a48efe737f75404df6.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Add your information Weverse Account.</h1>
                    </div>
                    <div className="text-left">
                        <div >
                            <div className="mt-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Username</label>
                                <input type="text" required  onChange={onChangeName} value={name} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                            </div>
                            <div className="mb-12 mt-4">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Contact</label>
                                <input type="number" required onChange={onChangeContact} value={contact} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                            </div>

                            <a href={`http://127.0.0.1:8000/signup/add/information/${email}?name=${name}&contact=${contact}`}>
                                {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                                <div  className="w-full font-medium py-2.5 text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Save</div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}