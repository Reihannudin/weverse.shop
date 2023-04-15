import {useState} from "react";


export const CartCardComponent = (props) => {

    let [quantity , setQuantity] = useState(1);

    const incrementQuantity = () => {
        // let quantity = document.getElementById('quantity')
        // eslint-disable-next-line no-unused-vars
        setQuantity(quantity++)
    }

    const decrementQuantity = () => {
        // let quantity = document.getElementById('quantity')
        // eslint-disable-next-line no-unused-vars
        setQuantity(quantity--)
    }

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
                                 src={props.image}
                                 alt="BTS"/>
                        </div>
                        <div className="text-left mx-3 my-2">
                            <h5 style={{ fontSize:"16px"}}>{props.name}</h5>
                            <p style={{ fontSize:"15px", color:"#a6a6a6"}}>Option : {props.name}</p>
                        </div>
                    </div>
                    <div className="flex mx-8">
                        <div className="my-auto">
                            <button className="px-2" onClick={decrementQuantity} style={{ border:"1px solid #BEBEBE", color:"#ababab",borderRadius:"4px",fontSize:"16px"}}>-</button>
                            <input className="w-2/12 text-center" id="quantity" type="text"  value={quantity}/>
                            <button className="px-2" onClick={incrementQuantity} style={{ border:"1px solid #BEBEBE", color:"#ababab", borderRadius:"4px",fontSize:"16px"}}>+</button>
                        </div>
                        <div className="flex my-auto gap-14">
                            <div>
                                <h2 className="font-bold" style={{ fontSize:"18px"}}>${props.price}</h2>
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