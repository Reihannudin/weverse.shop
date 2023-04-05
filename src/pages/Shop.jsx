import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {NavigationComponent} from "../components/Navigation.Component";
import {FooterComponent} from "../components/Footer.Component";
import {CategoriesComponent} from "../components/Categories.Component";
import {TypeComponent} from "../components/Type.Component";
import {ProductListComponent} from "../components/ProductList.Component";

function Shop ({}){

    // const [product , setProduct ] = useState([])
    const {id} = useParams();

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/shop/${id}`)
    //         .then((response) => response.json())
    //         .then((product => setProduct(product)))
    // } , [id])

    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/shop/${id}/categories/${id}`)
    //         .then((response) => response.json())
    //         .then((product => setProduct(product)))
    // } , [id])
    //
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/shop/${id}/type/${id}`)
    //         .then((response) => response.json())
    //         .then((product => setProduct(product)))
    // } , [id])
    //
    // useEffect(() => {
    //     fetch(`http://127.0.0.1:8000/api/shop/${id}/categories/${id}/type/${id}`)
    //         .then((response) => response.json())
    //         .then((product => setProduct(product)))
    // } , [id])

    // console.log(product);

    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <CategoriesComponent id={id} />
                <TypeComponent id={id}/>
                <ProductListComponent id={id}/>
            </div>
            <FooterComponent />
        </>
    )
}

export default Shop;