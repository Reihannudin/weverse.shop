import {NavigationComponent} from "../components/Navigation.Component";
import {SupportListComponent} from "../components/SupportList.Component";
import {SupportFAQComponent} from "../components/SupportFAQ.Component";
import {FooterComponent} from "../components/Footer.Component";
import {OrderListComponent} from "../components/OrderList.Component";

function Order(){
    return (
        <>
            <NavigationComponent />
            <div className="pt-14">
                <OrderListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Order