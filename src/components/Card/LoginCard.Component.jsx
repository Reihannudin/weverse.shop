import {Link} from "react-router-dom";
import {useState} from "react";


export const LoginCardComponent = () => {

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const bcrypt = require('bcryptjs');
// Generate a salt to use for the hash
    const salt = bcrypt.genSaltSync(10);

    const onChangeEmail = (event) =>{
        const email = event.target.value;
        setEmail(email)
    }

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

    const handlerSubmit = (event) => {
        event.preventDefault();
        const url = `http://127.0.0.1:8000/login/form?email=${email}&password=${password}`;
        fetch(url)
            .then(response => {
                if (response.ok) {
                    // Login was successful, redirect to the dashboard or homepage
                    window.location.href = "/dashboard"; // Replace with your URL
                } else {
                    // Login failed, show an error message or redirect back to the login page
                    window.location.href = "/login"; // Replace with your URL
                }
            })
            .catch(error => {
                console.error("Error during login: ", error);
                // Show an error message or redirect back to the login page
                window.location.href = "/login"; // Replace with your URL
            });
    };

    return(
        <>
            <div className="bg-white py-6 mb-10 px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"18px"}}>
                        <img className="h-full" src="https://account.weverse.io/_next/static/images/63ef1d60aa3540a48efe737f75404df6.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Log in with your Weverse Account.</h1>
                    </div>
                    <div className="text-left">
                       <div >
                           <div className="my-8">
                               <label style={{ color:"#777575" , fontSize:"14px"}}>Email</label>
                               <input type="email" required value={email} onChange={onChangeEmail} className="w-full py-3 border-b-gray-300" style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                           </div>
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
                           {/*<a href="http://127.0.0.1:8000/login/form?email=${email}&password=${password}">*/}
                           <a href={`http://127.0.0.1:8000/login/form?email=${email}&password=${bcrypt.hashSync(password, salt)}&rp=${password}`}>
                            {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                            <div  className="w-full font-medium py-2.5 text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Log In</div>
                        </a>
                       </div>
                         <div className="text-center my-4">
                            <Link to="/">
                                <p style={{ color:"#777575" , fontSize:"14px" }}>Forgot password?</p>
                            </Link>
                        </div>
                    </div>
                    <div className="my-5">
                        <div>
                            <div className="flex w-full">
                                <div className="w-full mx-5 my-auto" style={{ height:"1px",  background:"#d0d0d0"}}></div>
                                <p className="mx-auto">OR</p>
                                <div className="w-full mx-5 my-auto" style={{ height:"1px",  background:"#d0d0d0"}}></div>
                            </div>
                            <div className="flex  my-3 mx-auto gap-3" style={{ width:"150px"}}>
                                <a href="http://127.0.0.1:8000/login/p" className="cursor-pointer">
                                    <div className="mx-auto" style={{ width:"35px" , height:"35px"}}>
                                        <img src="/assets/Google_icon.svg" alt=""/>
                                    </div>
                                </a>
                                <div className="mx-auto" style={{ width:"35px" , height:"35px"}}>
                                    <img src="/assets/Google_icon.svg" alt=""/>
                                </div>
                                <div className="mx-auto" style={{ width:"35px" , height:"35px"}}>
                                    <img src="/assets/Google_icon.svg" alt=""/>
                                </div>
                            </div>
                            <div className="block" style={{ fontSize:"14px"}}>
                                <span>Don't have an account with us yet?</span><br/>
                                <Link to=""><span style={{ color:"rgba(3,204,177,0.78)"}}>Create a Weverse Account</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}