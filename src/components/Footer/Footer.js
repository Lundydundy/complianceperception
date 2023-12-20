import "./Footer.css"

const Footer = (props) => {
    const {changePage} = props
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 footer-item">
                        <h4>Compliance Perspective</h4>
                        <p>Your trusted consultant for compliance and success in the intricate world of finance.</p>
                    </div>
                    <div className="col-md-4 footer-item">
                        <h4>Site Navigation</h4>
                        <ul className="menu-list">
                            <li><a onClick={() => changePage("landing")}>Home</a></li>
                            <li><a onClick={() => changePage("about")}>About</a></li>
                            <li><a onClick={() => changePage("service")}>Services</a></li>
                            <li><a onClick={() => changePage("contact")}>Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 footer-item last-item">
                        <h4>Contact Us</h4>
                        <div className="contact-form">
                            <form id="contact footer-contact" action="https://formspree.io/f/mzbnppvn" method="post">
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