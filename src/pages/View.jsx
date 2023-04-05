import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {ViewProductComponent} from "../components/ViewProduct.Component";
import {DescriptionComponent} from "../components/DescriptionComponent";
import {AboutComponent} from "../components/About.Component";
import {InformationComponent} from "../components/Information.Component";

function View(){
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <ViewProductComponent />
                <DescriptionComponent />
                <InformationComponent />
                <AboutComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default View