import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {ViewProductComponent} from "../components/ViewProduct.Component";
import {DescriptionComponent} from "../components/DescriptionComponent";
import {AboutComponent} from "../components/About.Component";
import {InformationComponent} from "../components/Information.Component";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function View(){

    const params = useParams();

    const [product , setProduct] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${params.lang_id}/shop/${params.currency_id}/artist/${params.artist_id}/product/v/${params.product_id}`)
            .then((response) => response.json())
            .then((product => setProduct(product)))
    } , [])

    console.log(product)
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                {product.map((item) => {
                    return(
                        <>
                            <ViewProductComponent id={item.id} image={item.image} name={item.name} price={item.price} />
                            <DescriptionComponent description_image={item.description_image} />
                            <InformationComponent product_name={item.information_id.product_name} />
                            <AboutComponent />
                        </>
                    )
                })}
            </div>
            <FooterComponent />
        </>
    )
}

export default View