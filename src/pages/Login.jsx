import {FooterComponent} from "../components/Footer.Component";
import {LoginCardComponent} from "../components/Card/LoginCard.Component";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import api from "../config/api";

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