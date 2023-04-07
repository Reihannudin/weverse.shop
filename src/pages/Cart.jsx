import {NavigationComponent} from "../components/Navigation.Component";
import {CategoriesComponent} from "../components/Categories.Component";
import {ProductListComponent} from "../components/ProductList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {CartListComponent} from "../components/CartList.Component";

function Cart (){
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <CartListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Cart