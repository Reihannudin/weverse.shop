import {AnnouncementsCardComponent} from "./Card/AnnouncementsCard.Component";
import {EventsCardComponent} from "./Card/EventsCard.Component";

export const EventListComponent = () => {
    return(
        <>
            <div className="w-full pb-4">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 justify-between">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Events</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 pt-2">
                        <div>
                            <ul>
                                <li>
                                    <EventsCardComponent />
                                </li>
                                <li>
                                    <EventsCardComponent />
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}