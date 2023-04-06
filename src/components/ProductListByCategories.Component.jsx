import {ProductCardComponent} from "./Card/ProductCard.Component";
import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export const ProductListByCategoriesComponent = ({id , categories_id}) => {


    const [product , setProduct ] = useState([])

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/shop/${id}/categories/${categories_id}`)
            .then((response) => response.json())
            .then((product => setProduct(product)))
    } , [id])

    console.log(product)

    return(
        <>
            <div className="w-full">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex justify-between">
                            <div className="font-normal">
                                <p className="my-auto" style={{ fontSize:"14px"}}>28 Items</p>
                            </div>
                            <div className="flex gap-2">
                                <i className="fa-solid my-auto fa-check-circle"></i>
                                <p>Hide sold out</p>
                            </div>
                        </div>
                        <div className="bg-white pb-10">
                            <div className="grid my-6 gap-5 grid-cols-5">
                                {product.map((item) => {
                                    return(
                                        <>
                                            <div key={item.id} >
                                                <ProductCardComponent artist_id={item.artist_id} product_id={item.id} name={item.name} image={item.image} price={item.price} />
                                            </div>
                                        </>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}