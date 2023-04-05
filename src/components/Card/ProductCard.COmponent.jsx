import {Link} from "react-router-dom";

export const ProductCardComponent = (props) =>
{
    return (
        <>
            <Link to="/">
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

