import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

export const TypeComponent = ({id}) =>{

    const [type , setType] = useState([]);

    useEffect(() => {
        fetch(`http://127.0.0.1:8000/api/shop/${id}/type`)
            .then((response) => response.json())
            .then((type => setType(type)))
    } , [id])

    return(
        <>
        </>
    )
}
