

export const CartCardComponent = () => {
    return(
        <>
            <div>
                <div className="flex justify-between">
                    <div className="flex my-3">
                        <div className="me-3 my-auto">
                            <input className="my-7" style={{ width:"22px" , fontSize:"30px" }} type="radio"/>
                        </div>
                        <div className="my-2" style={{ width:"60px" , height:"60px"}}>
                            <img className="w-full h-full"
                                 src="https://cdn-contents.weverseshop.io/public/shop/dc3b90587c481a8e6336fd4e395b448a.jpg?q=95&w=128"
                                 alt="BTS"/>
                        </div>
                        <div className="text-left mx-3 my-2">
                            <h5 style={{ fontSize:"16px"}}>Official Slogan</h5>
                            <p style={{ fontSize:"15px", color:"#a6a6a6"}}>Option : Official Slogan</p>
                        </div>
                    </div>
                    <div className="flex mx-8">
                        <div className="my-auto">
                            <button disabled className="px-2" style={{ border:"1px solid #BEBEBE", color:"#ababab",borderRadius:"4px",fontSize:"16px"}}>-</button>
                            <input className="w-2/12 text-center" type="text" value="0"/>
                            <button className="px-2" style={{ border:"1px solid #BEBEBE", color:"#ababab", borderRadius:"4px",fontSize:"16px"}}>+</button>
                        </div>
                        <div className="flex my-auto gap-14">
                            <div>
                                <h2 className="font-bold" style={{ fontSize:"18px"}}>$16.72</h2>
                            </div>
                            <div>
                                <i className="fa-solid fa-x" style={{ color:"#8a8a8a" }}></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}