import {NavigationComponent} from "../components/Navigation.Component";
import {SupportListComponent} from "../components/SupportList.Component";
import {SupportFAQComponent} from "../components/SupportFAQ.Component";
import {FooterComponent} from "../components/Footer.Component";
import {AnnouncementListComponent} from "../components/AnnouncementList.Component";


function Announcement (){
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <AnnouncementListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Announcement