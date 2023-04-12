import {FooterComponent} from "../components/Footer.Component";
import {LoginCardComponent} from "../components/Card/LoginCard.Component";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../config/api";
import http from "../config/http";

function Login(){
    const navigate = useNavigate();
    const urlParams = new URLSearchParams(window.location.search);
    const auth_token = urlParams.get("auth_token");
    const user = urlParams.get("user");

    useEffect(() => {
        if (auth_token) {
            api
                .get("http://127.0.0.1:8000/api/user", {
                    method: 'POST',
                    headers: {
                        Authorization: "Bearer " + auth_token,
                        'Content-Type': 'application/json',
                        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
                    },
                })
                .then((res) => {
                    if (res) {
                        localStorage.setItem('isLogin' , true)
                        localStorage.setItem("token", auth_token);
                        localStorage.setItem("whoLogin", user);
                        navigate("/");
                    } else {
                        alert("Something wrong!");
                    }
                });
        }
    }, []);

    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="w-6/12 mx-auto">
                    <div className="w-8/12 mx-auto">
                        <LoginCardComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        </>
    )
}

export default Login

//
// function Logout(){
//
//     function Logout(){
//         const navigate = useNavigate();
//         const urlParams = new URLSearchParams(window.location.search);
//         const auth_token = urlParams.get("auth_token");
//         const isLogin = urlParams.get("isLogin");
//
//         console.log(auth_token)
//         console.log(isLogin)
//
//         useEffect(() => {
//             if (auth_token) {
//                 http
//                     .get("http://127.0.0.1:8000/logout", {
//                         method: 'POST',
//                         headers: {
//                             Authorization: "Bearer " + auth_token,
//                             'Content-Type': 'application/json',
//                             'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
//                         },
//                     })
//                     .then((res) => {
//                         if (res) {
//                             console.log("You success be there")
//                             localStorage.setItem('isLogin' , false )
//                             localStorage.setItem("token", auth_token);
//                             navigate("/");
//                         } else {
//                             alert("Something wrong!");
//                         }
//                     });
//             }
//         }, []);
//
//         return(
//             <>
//                 <div>
//                 </div>
//             </>
//         )
//     }
//
//     export default Logout
//
//     const navigate = useNavigate();
//     const urlParams = new URLSearchParams(window.location.search);
//     const auth_token = urlParams.get("auth_token");
//     const isLogin = urlParams.get("isLogin");
//
//     console.log(auth_token)
//     console.log(isLogin)
//
//     useEffect(() => {
//         if (auth_token) {
//             http
//                 .get("http://127.0.0.1:8000/logout", {
//                     method: 'POST',
//                     headers: {
//                         Authorization: "Bearer " + auth_token,
//                         'Content-Type': 'application/json',
//                         'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')
//                     },
//                 })
//                 .then((res) => {
//                     if (res) {
//                         console.log("You success be there")
//                         localStorage.setItem('isLogin' , false )
//                         localStorage.setItem("token", auth_token);
//                         navigate("/");
//                     } else {
//                         alert("Something wrong!");
//                     }
//                 });
//         }
//     }, []);
//
//     return(
//         <>
//             <div>
//             </div>
//         </>
//     )
// }
//
// export default Logout
//
