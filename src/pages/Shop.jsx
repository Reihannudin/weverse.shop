import {useEffect, useState} from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {CategoriesComponent} from "../components/Categories.Component";
import {TypeComponent} from "../components/Type.Component";
import {ProductListComponent} from "../components/ProductList.Component";
import Home from "./Home";

function Shop (){

    // const [product , setProduct ] = useState([])
    const {id } = useParams();


    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <CategoriesComponent id={id} />
                {/*<TypeComponent id={id}/>*/}
                <ProductListComponent id={id}/>
                {/*<ProductListByCategoriesComponent id={id} />*/}

            </div>
            <FooterComponent />
        </>
    )
}

export default Shop;