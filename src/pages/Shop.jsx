import {useEffect, useState} from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {CategoriesComponent} from "../components/Categories.Component";
import {TypeComponent} from "../components/Type.Component";
import {ProductListComponent} from "../components/ProductList.Component";
import Home from "./Home";

function Shop (){

    const params = useParams();
    console.log(params)

    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <CategoriesComponent artist_id={params.artist_id} language_id={params.lang_id} currency_id={params.currency_id} />
                {/*<TypeComponent id={id}/>*/}
                <ProductListComponent  artist_id={params.artist_id} language_id={params.lang_id} currency_id={params.currency_id} categories_id={params.categories_id}/>
                {/*<ProductListByCategoriesComponent id={id} />*/}

            </div>
            <FooterComponent />
        </>
    )
}

export default Shop;