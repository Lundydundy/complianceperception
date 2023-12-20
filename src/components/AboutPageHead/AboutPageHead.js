import Navigation from "../Navigation/Navigation"
import "./AboutPageHead.css"

const AboutPageHead = (props) => {
    const { page, changePage } = props
    return (
        <div className="about-head">
            <Navigation page={page} changePage={changePage} />
            <div className="container">
                <div className="row">
                </div>
            </div>
        </div>
    )
}

export default AboutPageHead