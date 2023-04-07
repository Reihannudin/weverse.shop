import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {AddressListComponent} from "../components/AddressList.Component";

function Address() {
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <AddressListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Address