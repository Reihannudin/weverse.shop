import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {OrderListComponent} from "../components/OrderList.Component";
import {ReturnListComponent} from "../components/ReturnList.Component";

function Return(){
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <ReturnListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Return