import {useState} from "react";
import bcrypt from "bcryptjs";

export const AddPasswordSignUpCardComponent = () => {
    const [password , setPassword] = useState('')
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");

    // console.log(email)

    const bcrypt = require('bcryptjs');
// Generate a salt to use for the hash
    const salt = bcrypt.genSaltSync(10);

    const onChangePassword = (event) => {
        const password = event.target.value;
        setPassword(password)
    }

    const VisibiliyPassword = () => {
        const visibility = document.getElementById('password')
        if (visibility.type === "password"){
            visibility.type = "text"
        } else if (visibility.type === "text"){
            visibility.type = "password"
        }
    }
    return(
        <>
            <div className="bg-white my-auto py-8 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"18px"}}>
                        <img className="h-full" src="https://account.weverse.io/_next/static/images/63ef1d60aa3540a48efe737f75404df6.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Add your password to your Weverse Account.</h1>
                    </div>
                    <div className="text-left">
                        <div >
                            <div className="my-8">
                                <label style={{ color:"#777575" , fontSize:"14px"}}>Password</label>
                                <div className="flex">
                                    <input id="password" required  value={password} type="password" onChange={onChangePassword} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your password"/>
                                    <button onClick={VisibiliyPassword}>
                                        <i className="fa-solid fa-eye-slash" style={{ color:"#777575"}}>
                                        </i>
                                    </button>
                                </div>
                            </div>
                            <a href={`http://127.0.0.1:8000/signup/add/password/${email}?email=${email}&password=${bcrypt.hashSync(password, salt)}`}>
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