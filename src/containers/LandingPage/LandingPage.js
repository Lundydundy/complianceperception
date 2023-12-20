import Callback from "../../components/Callback/Callback"
import GetToKnow from "../../components/GetToKnow/GetToKnow"
import Landing from "../../components/Landing/Landing"
import OurView from "../../components/OurView/OurView"
import RequestCall from "../../components/RequestCall/RequestCall"
import Services from "../../components/Services/Services"

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
        </div>
    )
}

export default LandingPage