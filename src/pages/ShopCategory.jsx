import {useEffect, useState} from "react";
import {Route, Routes, useParams} from "react-router-dom";
import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {CategoriesComponent} from "../components/Categories.Component";
import {TypeComponent} from "../components/Type.Component";
import {ProductListByCategoriesComponent} from "../components/ProductListByCategories.Component";

function ShopCategory (){

    const {id , categories_id} = useParams();

    console.log(id)
    console.log(categories_id)

    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <CategoriesComponent id={id} categories_id={categories_id} />
                <TypeComponent id={id}/>
                <ProductListByCategoriesComponent id={id} categories_id={categories_id}/>
            </div>
            <FooterComponent />
        </>
    )
}

export default ShopCategory;