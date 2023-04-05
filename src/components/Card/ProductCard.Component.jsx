import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const ProductCardComponent = (props) =>
{

    return (
        <>
            <Link to={`/shop/${props.artist_id}/product/${props.product_id}/v`}>
                <div className="w-full">
                    <div>
                        <div>
                            <img src={props.image} alt="{props.name}" />
                        </div>
                        <div className="text-left mx-3 pt-3 pb-14">
                            <p style={{ fontSize:"13px"}}>{props.name}</p>
                            <h5 className="font-medium" style={{ fontSize:"15px"}}>${props.price}</h5>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

