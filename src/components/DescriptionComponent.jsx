
export const DescriptionComponent = (props) => {
    return(
        <>
            <div className="w-9/12 mx-auto">
                <div className="w-10/12 mx-auto">
                    <div className="text-left">
                        <h2 className="font-bold" style={{ fontSize:"20px"}}>Description</h2>
                        <div className="w-10/12 mx-auto">
                            {props.description_image.map((item) => {
                                return(
                                    <img className="mx-4 mt-4" src={item.description_image} alt=""/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}