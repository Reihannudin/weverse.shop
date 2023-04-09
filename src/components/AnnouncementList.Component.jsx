import {Link} from "react-router-dom";
import {AnnouncementsCardComponent} from "./Card/AnnouncementsCard.Component";

export const AnnouncementListComponent = () => {
    return(
        <>
            <div className="w-full pb-4">
                <div className="w-10/12 py-4 mx-auto">
                    <div className="mx-5 pt-8">
                        <div className="flex pb-8 justify-between">
                            <div className=" my-auto">
                                <h2 className="font-bold my-0 py-0" style={{ fontSize:"30px"}}>Announcements</h2>
                            </div>
                        </div>
                    </div>
                    <div className="mx-5 pt-2">
                        <div>
                            <ul>
                                <li>
                                    <AnnouncementsCardComponent />
                                </li>
                                <li>
                                    <AnnouncementsCardComponent />
                                </li>
                                <li>
                                    <AnnouncementsCardComponent />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}