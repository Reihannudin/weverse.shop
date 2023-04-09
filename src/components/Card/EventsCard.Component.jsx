import {Link} from "react-router-dom";

export const EventsCardComponent = () => {
    return(
        <>
            <div className="w-full mb-4" style={{ borderBottom:"1px solid #ebebeb"}}>
                <Link to='/'>
                    <div className="mb-5 text-left">
                        <div className="flex gap-1.5">
                            <h1 className="font-semibold" style={{ fontSize:"17px" , color:"#000000"}}>BTS</h1>
                            <h1 className="font-semibold" style={{ fontSize:"17px" , color:"#000000"}}>Global</h1>
                        </div>
                        <h2 className="font-semibold" style={{ fontSize:"17px" , color:"#000000"}}>SUGA | Agust D Solo Album [D-DAY] Customer Video Call Fansign Event Announcement</h2>
                        <div className="my-1 flex gap-0.5">
                            <p className="my-auto" style={{ fontSize:"12px" , color:"#a9a9a9"}}>2022.11.05.</p>
                            <p className="my-auto" style={{ fontSize:"12px" , color:"#ff2424"}}>NEW</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

