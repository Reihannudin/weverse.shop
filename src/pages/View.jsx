import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {ViewProductComponent} from "../components/ViewProduct.Component";
import {DescriptionComponent} from "../components/DescriptionComponent";
import {AboutComponent} from "../components/About.Component";
import {InformationComponent} from "../components/Information.Component";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

function View(){

    const {id , product_id} = useParams();

    console.log(id)
    console.log(product_id)

    const [product , setProduct] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/shop/${id}/product/${product_id}/v`)
            .then((response) => response.json())
            .then((product => setProduct(product)))
    } , [id , product_id])

    console.log(product)
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                {product.map((item) => {
                    return(
                        <>
                            <ViewProductComponent image={item.image} name={item.name} price={item.price} />
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