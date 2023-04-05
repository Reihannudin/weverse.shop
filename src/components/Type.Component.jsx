import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const TypeComponent = ({id}) =>{

    const [type , setType] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/shop/${id}/type`)
            .then((response) => response.json())
            .then((type => setType(type)))
    } , [id])

    console.log(type)

    return(
        <>
            <div className="w-full" style={{ borderBottom:"1px solid #ebebeb", background:"#FAFBFC"}}>
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-4">
                        <ul className="flex py-0 gap-8">
                            {type.map((item) => {
                                return(
                                    <li>
                                        <Link>
                                            <h4 className="font-normal text-gray-500" style={{ fontSize:"12px"}}>{item.name}</h4>
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
