import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const CategoriesComponent = ({id}) =>{

    const [categories, setCategories] = useState([]);
    ///'
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/shop/${id}/categories`)
            .then((response) => response.json())
            .then((product => setCategories(product)))
    } , [id])

    return(
        <>
            <div className="w-full" style={{ borderBottom:"1px solid #ebebeb"}}>
                <div className="w-10/12 pb-5 mx-auto">
                    <div className="mx-4">
                        <ul className="flex pt-7 pb-0 gap-8">
                            {categories.map((item) => {
                                return(
                                    <li>
                                        <Link>
                                            <h4 className="font-bold" style={{ fontSize:"14px"}}>{item.name}</h4>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
