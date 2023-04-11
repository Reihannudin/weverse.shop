import {NavigationComponent} from "../components/Navigation.Component";
import {BannerListComponent} from "../components/BannerList.Component";
import {ArtistListComponent} from "../components/ArtistList.Component";
import {FooterComponent} from "../components/Footer.Component";

function Home({logged}){

    return(
        <>
            <NavigationComponent/>
            <div>
                <BannerListComponent />
                <ArtistListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Home