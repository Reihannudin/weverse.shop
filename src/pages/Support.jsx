import {NavigationComponent} from "../components/Navigation.Component";
import {CartListComponent} from "../components/CartList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {SupportFAQComponent} from "../components/SupportFAQ.Component";
import {SupportListComponent} from "../components/SupportList.Component";

function Support(){
    return(
        <>
            <NavigationComponent />
                <div className="pt-14">
                    <SupportListComponent />
                    <SupportFAQComponent />
                </div>
            <FooterComponent />
        </>
    )
}

export default Support