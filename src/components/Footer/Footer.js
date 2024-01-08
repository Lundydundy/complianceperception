import "./Footer.css"
import { Link } from "react-router-dom"

const Footer = (props) => {
    const {changePage, page} = props
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-item">
                        <h4>Compliance Perception</h4>
                        <p>Your trusted consultant for compliance and success in the intricate world of finance.</p>
                        <a style={{textDecoration: "none"}} href="mailto:complianceperception97@gmail.com">complianceperception97@gmail.com</a>
                        <a style={{textDecoration: "none"}} href="tel:416-450-6471">416-450-6471</a>
                    </div>
                    <div className="col-md-4 footer-item">
                        <h4>Site Navigation</h4>
                        <ul className="menu-list">
                            <Link style={{textDecoration: "none", color: "white"}} to="/"><li onClick={() => changePage("landing")}>Home</li></Link>
                            <a href="#services" style={ page !== "landing" ? { display: "none", textDecoration: "none", color: "white"} : { display: "block", textDecoration: "none", color: "white"}}><li onClick={() => changePage("service")}>Services</li></a>
                            <a href="#about" style={ page !== "landing" ? { display: "none", textDecoration: "none", color: "white"} : { display: "block", textDecoration: "none", color: "white"}}><li onClick={() => changePage("about")}>About</li></a>
                            <Link style={{textDecoration: "none", color: "white"}} to="/contact"><li onClick={() => changePage("contact")}>Contact</li></Link>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-item last-item">
                        <h4>Contact Us</h4>
                        <div className="contact-form">
                            <form id="contact footer-contact" action="https://formspree.io/f/xgegebnn" method="POST">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" className="form-control" id="name" placeholder="Full Name" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input name="email" type="text" className="form-control" id="email" pattern="[^ @]*@[^ @]*"
                                                placeholder="E-Mail Address" required=""/>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" className="form-control" id="message" placeholder="Your Message"
                                                required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button id="form-submit" className="filled-button">Send Message</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}

export default Footer