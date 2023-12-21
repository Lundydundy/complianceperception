import "./AboutText.css"
import aboutImage from "./about-image.jpg"

const AboutText = () => {
    return(
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
                      <p>With over two decades of unwavering commitment and expertise in the industry, Lorne stands as a seasoned professional. 
                        Having navigated the complexities for more than 20 years, he brings a wealth of knowledge to every aspect of financial services. 
                        Trust Lorne to guide you through the intricacies of compliance, strategic financial management, and regulatory nuances, 
                        ensuring your business benefits from a wealth of experience and a proven track record of success.
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
      </div>
    )
}

export default AboutText