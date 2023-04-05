import {LoginCardComponent} from "../components/Card/LoginCard.Component";
import {FooterComponent} from "../components/Footer.Component";
import {SignUpCardComponent} from "../components/Card/SignUpCard.Component";

function SignUp(){
    return(
        <>
            <div className="w-full py-6" style={{ background:"#FAFBFC"}}>
                <div className="w-6/12 mx-auto">
                    <div className="w-8/12 mx-auto">
                        <SignUpCardComponent />
                    </div>
                </div>
                <FooterComponent />
            </div>
        </>
    )
}

export default SignUp