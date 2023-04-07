
export const AddressListComponent = () => {
    return(
        <>
            <div className="w-full pb-14">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 ">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Shipping Address</h2>
                            </div>

                        </div>
                        <div>
                            <div className="py-14">
                                <ul>
                                    <li>
                                        <div>
                                          <div className="flex justify-between pb-5" style={{ borderBottom:"1px solid #ebebeb"}} >
                                              <div className="w-8/12 font-normal" >
                                                  <div className="flex gap-2" style={{ color:"#08C2CC"}}>
                                                      <p>Andrian Raihannudin Andrian Raihannudin</p>
                                                      <p className="px-2 my-auto" style={{ border:"1px solid #08C2CC" , borderRadius:"16px" , fontSize:"12px"}}>DEFAULT</p>
                                                  </div>
                                                  <div className="text-left mt-1 mb-0 py-0">
                                                      <p className="my-0 py-0" style={{ fontSize:"17px"}}>Grand catania block O5/39, Ciakar, Panongan,Kab.Tangerang,Banten kab.Tangerang, Banten
                                                          15710</p>
                                                  </div>
                                                  <div className="text-left my-0 py-0" style={{ fontSize:"16px"}}>
                                                      <p className="my-0 py-0">Indonesia</p>
                                                      <p className="my-0 py-0">+62 87773301182</p>
                                                  </div>
                                              </div>
                                              <div className="w-4/12">
                                                  <div className="flex text-right  gap-5">
                                                      <button style={{ border:"1px solid #888B8B" , color:"#888B8B" , fontSize:"14px" , borderRadius:"6px" }}  className="px-3  py-1  ms-auto me-0" >Edit</button>
                                                      <button style={{ border:"1px solid #888B8B" , color:"#888B8B" , fontSize:"14px" , borderRadius:"6px" }} className=" px-3  py-1 ms-0 me-0">Delete</button>
                                                  </div>
                                              </div>
                                          </div>
                                            <div className="flex gap-2 my-1" style={{ color:"#bebebe"}}>
                                                <i className="fa-solid my-auto fa-info-circle"></i>
                                                <p style={{ fontSize:"14px"}}>You can add up to 10 shipping addresses.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <button className="w-2/12 my-7 font-medium px-8 py-3 " style={{ background:"#40CDCC" , borderRadius:"4px" , fontSize:"16px" , color:"white" , border:"1px solid #40CDCC"}}>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}