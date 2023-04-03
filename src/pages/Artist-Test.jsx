import {useEffect, useState} from "react";

function ArtistTest(){


    const [searchFields , setSearchFields] = useState('')
    const [ monsters, setMonster ] = useState([])
    const [title , setTitle] = useState('Artist')

    useEffect(() =>{
        // get data from API
        fetch("http://127.0.0.1:8000/api/artist")
            //     // make respionse to jsonn
            .then((response) => response.json())
            .then((monster => setMonster(monster)));
    }, [])

    console.log(monsters);


    return(
        <>
            <div className="App">
                <h1 className="app-title">{title}</h1>
                {monsters.map((monster) => {
                    return(
                        <>
                            <p className="text-red-700" key={monster.id}>{monster.name}</p>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ArtistTest