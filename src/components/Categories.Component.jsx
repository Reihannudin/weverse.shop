import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";

export const CategoriesComponent = ({ categories_id , language_id , currency_id , artist_id }) =>{

    const [categories, setCategories] = useState([]);
    const isUndefined = categories_id == undefined;

        ///'
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/${language_id}/shop/${currency_id}/artist/${artist_id}/categories/`)
            .then((response) => response.json())
            .then((product => setCategories(product)))
    } , [artist_id])

    return(
        <>
            <div className="w-full" style={{ borderBottom:"1px solid #ebebeb"}}>
                <div className="w-10/12 pb-5 mx-auto">
                    <div className="mx-4">
                        <ul className="flex pt-7 pb-0 gap-8">
                            <li>
                                <Link to={`/${language_id}/shop/${currency_id}/artist/${artist_id}/categories/`} >
                                    <h4 className="font-bold" style={{ fontSize:"14px"}}>All</h4>
                                </Link>
                            </li>
                            {categories.map((item) => {
                                return(
                                    <li >
                                        <a href={`/${language_id}/shop/${currency_id}/artist/${artist_id}/categories/${item.id}`}>
                                            <h4 className="font-bold" style={{ fontSize:"14px"}}>{item.name}</h4>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
                <div className="w-full" style={{ borderBottom:"1px solid #ebebeb", background:"#FAFBFC"}}>
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-4">
                        <ul className="flex py-0 gap-6">
                            {categories.map((category , index) => {
                                // const subCategory = item.sub_category;
                                return(
                                    <div className="flex gap-6" key={category.id} >
                                        {category.sub_category.map((item , index) => {
                                            return(
                                                <>
                                                    {isUndefined ? (
                                                        <li   key={index}>
                                                            <Link>
                                                                <h4 className="font-normal text-left text-gray-500" style={{ fontSize:"12px"}}>{item.name}</h4>
                                                            </Link>
                                                        </li>
                                                    ):(
                                                        <li className={item.categories_id == categories_id ? 'active':'hidden'}   key={index}>
                                                            <Link>
                                                                <h4 className="font-normal text-left text-gray-500" style={{ fontSize:"12px"}}>{item.name}</h4>
                                                            </Link>
                                                        </li>
                                                    )
                                                    }
                                                </>
                                                )
                                        })}

                                    </div>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
