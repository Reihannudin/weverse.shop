import {Link} from "react-router-dom";
import {useState} from "react";
import bcrypt from "bcryptjs";

export const SignUpCardComponent = () => {

    const [email , setEmail] = useState('');

    const onChangeEmail = (event) =>{
        const email = event.target.value;
        setEmail(email)
        console.log(email)

    }

    return(
        <>
            <div className="bg-white py-6 mb-5 px-10 " style={{ borderRadius:"8px"}}>
                <div>
                    <div className="my-8" style={{ height:"18px"}}>
                        <img className="h-full" src="https://account.weverse.io/_next/static/images/63ef1d60aa3540a48efe737f75404df6.svg" alt=""/>
                    </div>
                    <div className="mx-0 text-left">
                        <h1 className="font-bold" style={{ fontSize:"26px"}}>Weverse Account Sign up</h1>
                    </div>
                    <div className="text-left">
                        <div className="my-8">
                            <label style={{ color:"#777575" , fontSize:"14px"}}>Email</label>
                            <input type="email" className="w-full py-3 border-b-gray-300" onChange={onChangeEmail} style={{ borderBottom:"1px solid #ebebeb"}} placeholder="your@email.com"/>
                        </div>
                        <div className="py-24">
                                         </div>
                        <a href={`http://127.0.0.1:8000/signup/form?email=${email}`}>
                            {/*`http://127.0.0.1:8000/login/form?email=${email}&password=${password}`*/}
                            <div  className="w-full font-medium py-2.5 text-center" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Sign In</div>
                        </a>
                        {/*<button className="w-full font-medium py-2.5" style={{ color:"#ffffff" , borderRadius:"4px" , fontSize:"16px" , border:"1px solid #40CDCC" , background:"#08CCCA"}}>Sign In</button>*/}
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
                                <div className="mx-auto" style={{ width:"35px" , height:"35px"}}>
                                    <img src="/assets/Google_icon.svg" alt=""/>
                                </div>
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