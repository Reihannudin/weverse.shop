import {ArtistCardComponent} from "./Card/ArtistCard.Component";
import {useEffect, useState} from "react";

export const ArtistListComponent = () => {

    const [ artist, setArtist ] = useState([])

    useEffect(() =>{
        // get data from API
        fetch("http://127.0.0.1:8000/api/artist")
            //     // make respionse to jsonn
            .then((response) => response.json())
            .then((artist => setArtist(artist)));
    }, [])


    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 pb-14 mx-auto">
                    <div className="mx-3 flex justify-between">
                        <div className="mx-2">
                            <h2 className="font-bold" style={{ fontSize:"24px"}}>Weverse Shop Artist</h2>
                        </div>
                        <div className="mx-2 flex gap-2 my-auto">
                            <i  style={{ fontSize:"18px"}} className="fa-solid my-auto fa-filter"></i>
                            <p className="my-auto" style={{ fontSize:"18px"}}>Artist</p>
                        </div>
                    </div>
                    <div className="py-6 mx-7 grid grid-cols-2">
                        {artist.map((item) => {
                            return(
                                    <ArtistCardComponent id={item.id} image={item.image} name={item.name}/>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}