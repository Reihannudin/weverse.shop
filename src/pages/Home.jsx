import {NavigationComponent} from "../components/Navigation.Component";
import {BannerListComponent} from "../components/BannerList.Component";
import {ArtistListComponent} from "../components/ArtistList.Component";
import {FooterComponent} from "../components/Footer.Component";
import {useEffect, useState} from "react";

function Home(){

    return(
        <>
            <NavigationComponent />
            <div>
                <BannerListComponent />
                <ArtistListComponent />
            </div>
            <FooterComponent />
        </>
    )
}

export default Home