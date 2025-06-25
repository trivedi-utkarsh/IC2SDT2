import HeroSection from "@/components/homePage/HeroSection";
import AboutConference from "@/components/homePage/AboutConference";
import ConferenceObjectives from "@/components/homePage/ConferenceObjectives";
import ConferenceTracks from "@/components/homePage/ConferenceTracks";
import AboutColleges from "@/components/homePage/AboutColleges";
import SponsorsSection from "@/components/homePage/sponsors";
import Howtoreach from "@/components/delhi.jsx"
import PosterPopup from "@/components/homePage/PosterPopup";

export default function Home() {
    return (
        <>
            <PosterPopup imageUrl="/poster.png" />

            <HeroSection/>
            <AboutColleges/>
            <AboutConference/>
            <Howtoreach/>
            
             {/* <SponsorsSection /> */}
            
             {/* how to reach */}
             {/* about delhi */}
        </>
    )
}
