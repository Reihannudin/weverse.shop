import {NavigationComponent} from "../components/Navigation.Component";
import {CartListComponent} from "../components/CartList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {CheckoutListComponent} from "../components/CheckoutList.Component";

function Checkout(){
    return(
        <>
            <NavigationComponent />
                <div className="pt-14">
                    <CheckoutListComponent />
                </div>
            <FooterComponent />
        </>
    )
}

export default Checkout