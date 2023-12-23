import "./AboutText.css"
import aboutImage from "./about-image.jpg"

const AboutText = () => {
    return (
        <div className="more-info-page more-info-about-info">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="more-info-page-content">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="right-content">
                                        <span>solid background on finance</span>
                                        <h2>Get to know <em>Lorne Switzer</em></h2>
                                        <p>Lorne started in the securities industry in October 1980. He's had an unwavering commitment and expertise in the industry.
                                            He's worked for numerous firms in the full service advice, order execution and asset management sectors. Lorne stands a seasoned professional.
                                            Having navigated the complexities of the securities world for more than 30 years, he brings a wealth of knowledge and experience to every aspect of financial services.
                                        </p>

                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="left-image">
                                        <img src={aboutImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default AboutText