import {NavigationComponent} from "../components/Navigation.Component";
import {OrderListComponent} from "../components/OrderList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {SuccessfullyListComponent} from "../components/SuccessfullyList.Component";
import {OrderViewListComponent} from "../components/OrderViewList.Component";

function ViewOrder(){
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <OrderViewListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default ViewOrder