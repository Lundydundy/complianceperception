import Navigation from "../../Navigation/Navigation"
import "./ServicePageHead.css"

const ServicePageHead = (props) => {
    const { page, changePage } = props
    return (
        <div className="service-head">
            <Navigation page={page} changePage={changePage} />
            <div className="container">
                <div className="row">
                    <h1>Services</h1>
                </div>
            </div>
        </div>
    )
}

export default ServicePageHead