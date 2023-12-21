import Callback from "../../components/LandingPageComp/Callback/Callback"
import GetToKnow from "../../components/LandingPageComp/GetToKnow/GetToKnow"
import Landing from "../../components/LandingPageComp/Landing/Landing"
import OurView from "../../components/LandingPageComp/OurView/OurView"
import RequestCall from "../../components/LandingPageComp/RequestCall/RequestCall"
import Services from "../../components/LandingPageComp/Services/Services"
import Footer from "../../components/Footer/Footer"

const LandingPage = (props) => {
    const {page, changePage} = props
    return (
        <div className="animate__animated animate__fadeIn">
            <Landing page={page} changePage={changePage}/>
            <Callback />
            <Services changePage={changePage}/>
            <GetToKnow changePage={changePage}/>
            <OurView />
            <RequestCall />
            <Footer page={page} changePage={changePage} />
        </div>
    )
}

export default LandingPage