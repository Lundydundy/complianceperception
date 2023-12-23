import "./GetToKnow.css"
import moreInfo from "./more-info.jpg"


const GetToKnow = () => {
    return (
        <div className="more-info" >
            <div className="container">
                <div className="row" id="about">
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
                                        <p>Lorne started in the securities industry in October 1980. He's had an unwavering commitment and expertise in the industry.
                                            He's worked for numerous firms in the full service advice, order execution and asset management sectors. Lorne stands a seasoned professional.
                                            Having navigated the complexities of the securities world for more than 30 years, he brings a wealth of knowledge and experience to every aspect of financial services.
                                        </p>
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