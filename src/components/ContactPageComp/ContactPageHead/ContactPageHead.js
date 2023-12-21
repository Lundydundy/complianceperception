import Navigation from "../../Navigation/Navigation"
import "./ContactPageHead.css"

const ContactPageHead = (props) => {
    const { page, changePage } = props
    return (
        <div className="contact-head">
            <Navigation page={page} changePage={changePage} />
            <div className="container">
                <div className="row">
                    <h1>Contact</h1>
                </div>
            </div>
        </div>
    )
}

export default ContactPageHead