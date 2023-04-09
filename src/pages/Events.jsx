import {NavigationComponent} from "../components/Navigation.Component";
import {AnnouncementListComponent} from "../components/AnnouncementList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {EventListComponent} from "../components/EventList.Component";

function Events (){
    return(
        <>
            <NavigationComponent />
            <div className="pt-14">
                <EventListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Events