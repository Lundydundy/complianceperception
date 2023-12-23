import "./OurView.css"
import view from "./viewpoint.jpg"

const OurView = () => {
    return (
        <div className="our-view" id="viewpoint">
            <h2>Our Viewpoint</h2>
            <div className="text">
                <p>Compliance is a community coming together to set a bar for handling your firm’s and client’s financial goals.
                    Compliance ensures that your firm’s controls perform as expected. A compliance program that fails to manage perceptions will lose the confidence of all stakeholders.
                    Perception is an important factor for an effective compliance program as it drives trust.</p>
                <img src={view} />
            </div>
        </div>
    )
}

export default OurView