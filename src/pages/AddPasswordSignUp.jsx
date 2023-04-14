import {AddPasswordSignUpCardComponent} from "../components/Card/AddPasswordSIgnUpCard.Component";

function AddPasswordSignUp (){
 return(
     <>
         <div className="w-full py-6 h-full" style={{ background:"#FAFBFC"}}>
             <div className="w-6/12 mx-auto">
                 <div className="w-8/12 mb-28 mt-16 mx-auto">
                     <AddPasswordSignUpCardComponent />
                 </div>
             </div>
         </div>
     </>
 )
}

export default AddPasswordSignUp