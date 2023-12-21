import "./GetToKnow.css"
import moreInfo from "./more-info.jpg"

const GetToKnow = () => {
    return (
        <div className="more-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="more-info-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="left-image">
                                        <img src={moreInfo} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6 align-self-center">
                                    <div className="right-content">
                                        <h2>Get to know <em>Lorne</em></h2>
                                        <p>With over two decades of unwavering commitment and expertise in the industry, Lorne stands as a
                                            seasoned professional.
                                            Having navigated the complexities for more than 20 years, he brings a wealth of knowledge to every
                                            aspect of financial services. </p>
                                        <a href="/about" className="filled-button">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GetToKnow