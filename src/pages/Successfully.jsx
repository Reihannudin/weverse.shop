import {NavigationComponent} from "../components/Navigation.Component";
import {CheckoutListComponent} from "../components/CheckoutList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {SuccessfullyListComponent} from "../components/SuccessfullyList.Component";

function Successfully(){
    return(
        <>
            <NavigationComponent />
                <div className="pt-14">
                    <SuccessfullyListComponent />
                </div>
            <FooterComponent />
        </>
    )
}

export default Successfully