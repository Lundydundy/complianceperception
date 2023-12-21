import ContactInfo from "../../components/ContactPageComp/ContactInfo/ContactInfo"
import ContactPageHead from "../../components/ContactPageComp/ContactPageHead/ContactPageHead"
import Footer from "../../components/Footer/Footer"
import RequestCall from "../../components/LandingPageComp/RequestCall/RequestCall"

const ContactPage = (props) => {
    const {page, changePage} = props
    return(
        <div className="animate__animated animate__fadeIn">
            <ContactPageHead page={page} changePage={changePage}/>
            <ContactInfo />
            <RequestCall />
            <Footer page={page} changePage={changePage} />
        </div>
    )
}

export default ContactPage