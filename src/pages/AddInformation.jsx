import {AddPasswordSIgnUpCardComponent} from "../components/Card/AddPasswordSIgnUpCard.Component";
import {AddInformationCardComponent} from "../components/Card/AddInformationCard.Component";

function AddInformation(){
    return(
        <>
            <div className="w-full py-6 h-full" style={{ background:"#FAFBFC"}}>
                <div className="w-6/12 mx-auto">
                    <div className="w-8/12 mb-14 mt-5 mx-auto">
                        <AddInformationCardComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddInformation