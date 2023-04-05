
export const InformationComponent = (props) => {
    return(
        <>
            <div className="w-9/12 mb-14 mx-auto">
                <div className="w-10/12 mx-auto">
                    <div className="text-left w-10/12 mx-auto">
                        <div className="my-8">
                            <h2 className="font-bold" style={{ fontSize:"18px"}}>Shipping</h2>
                            <div className="flex gap-3 my-5">
                                <div>
                                    <i style={{ fontSize:"14px" , color:"#9a9999"}} className="fa-solid fa-shipping-fast"></i>
                                </div>
                                <div>
                                    <p style={{  color:"#605f5f"}}>Country/region · Shipping fee</p>
                                    <p style={{  color:"#b9b9b9" , fontSize:"15px"}}>Add a shipping address to check shipping <fee className=""></fee></p>
                                </div>
                            </div>
                        </div>
                        <div className="my-8">
                            <h2 className="font-bold" style={{ fontSize:"18px"}}>Information</h2>
                            <table  className="w-full my-6" >
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Product Name</th>
                                    <td className="py-2 w-4/5 px-3" >{props.product_name}</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Product material</th>
                                    <td className="py-2 w-4/5 px-3" >PET, Paper</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Size (cm)</th>
                                    <td className="py-2 w-4/5 px-3" >29.7 * 42</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Contents</th>
                                    <td className="py-2 w-4/5 px-3" >Poster 1EA, PET 1EA / 1SET</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Manufacturer</th>
                                    <td className="py-2 w-4/5 px-3" >HYBE</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Country of manufacture</th>
                                    <td className="py-2 w-4/5 px-3" >KOREA</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Instructions for care and handling</th>
                                    <td className="py-2 w-4/5 px-3" >Please be careful as sharp edges may cut your hand.<br/>
                                        Keep away from hot, humid places and direct sunlight.<br/>
                                        Do not use it for purposes other than originally intended.<br/>
                                        Keep away from fire.<br/>
                                        Do not put in your mouth or suck on it.</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Quality assurance standards</th>
                                    <td className="py-2 w-4/5 px-3" >In accordance with relevant laws and the criteria for the settlement of consumer disputes</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Product support manager and phone number</th>
                                    <td className="py-2 w-4/5 px-3" >Weverse Shop Customer Center : 1544-0790</td>
                                </tr>
                                <tr className="w-full" style={{ borderTop:"1px solid #ebebeb" , fontSize:"14px", borderBottom:"1px solid #ebebeb"}}>
                                    <th className="py-2 w-1/5 font-normal px-5 " style={{ background:"#FAFBFC" , color:"#202429"}}  >Mail Order
                                        Business Information</th>
                                    <td className="py-2 w-4/5 px-3" >1) Company: HYBE Co., Ltd.<br/>
                                        2) Representative: Jiwon Park<br/>
                                        3) Contact (customer service): 1544-0790<br/>
                                        4) Location: 42, Hangang-daero, Yongsan-gu, Seoul, Republic of Korea<br/>
                                        5) Business registration number: 120-86-78223<br/>
                                        6) Mail order business registration number: 2021-SeoulYongsan-1364</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}