import {LoginCardComponent} from "../components/Card/LoginCard.Component";
import {FooterComponent} from "../components/Footer.Component";
import {AddPasswordCardComponent} from "../components/Card/AddPasswordCard.Component";
import {useState} from "react";


function AddPassword (){

    return(
        <>
            <div className="w-full py-6 h-full" style={{ background:"#FAFBFC"}}>
                <div className="w-6/12 mx-auto">
                    <div className="w-8/12 mb-28 mt-16 mx-auto">
                        <AddPasswordCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddPassword