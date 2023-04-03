import {useEffect, useState} from "react";

export const BannerListComponent = () => {

    const [ banners , setBanners ] = useState([])

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/banner")
            .then((response) => response.json())
            .then((banners => setBanners(banners)))
    } , [])


    const scrollLeft = () => {
        document.getElementById("contentRecommended").scrollLeft -= 400;
    }

    const scrollRight = () => {
        document.getElementById("contentRecommended").scrollLeft += 400;
    }

    console.log(banners)

    return(
        <>
            <section className="w-full pt-14">
                <div className="pb-14 pt-14">
                    <div className="w-full overflow-auto  scrollbar-hide gap-3 flex">
                        <div className="relative pb-14  bg-white">
                            {/*<div className="absolute right-0 top-1 ">*/}
                            {/*    <button onClick={scrollLeft} className="p-2 m-2 rounded-full bg-white">*/}
                            {/*        <i className="fa-solid fa-arrow-left"></i>*/}
                            {/*    </button>*/}
                            {/*    <button onClick={scrollRight} className="p-2 m-2 rounded-full bg-white">*/}
                            {/*        <i className="fa-solid fa-arrow-right"></i>*/}
                            {/*    </button>*/}
                            {/*</div>*/}
                            <div id="contentRecommended" className="carousel py-0 gap-3 flex items-center justify-start  scrollbar-hide overflow-x-auto scroll-smooth ">
                                {banners.map((item) => {
                                    return(
                                        <div style={{ width:"600px"}}>
                                            <div style={{ height:"337px"}}>
                                                <img src={item.image} className="h-full border-radius-8" />
                                            </div>
                                            <div className="text-center mx-auto my-3 ">
                                                <h3 style={{ fontSize:"24px"}} className="font-bold text-gray-800">{item.title}</h3>
                                                <span className="text-gray-500">{item.short_description}</span>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


//