import "./RequestCall.css"

const RequestCall = () => {
    return (
        <div className="callback-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-heading">
                            <h2>Request a <em>call back</em></h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="contact-form">
                            <form id="contact" action="https://formspree.io/f/mzbnppvn" method="post">
                                <div className="row">
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input name="name" type="text" className="form-control" id="call-name" placeholder="Full Name"
                                                required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                        <fieldset>
                                            <input name="email" type="text" className="form-control" id="call-email" pattern="[^ @]*@[^ @]*"
                                                placeholder="E-Mail Address" required="" />
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <textarea name="message" rows="6" className="form-control" id="call-message" placeholder="Your Message"
                                                required=""></textarea>
                                        </fieldset>
                                    </div>
                                    <div className="col-lg-12">
                                        <fieldset>
                                            <button type="submit" id="call-form-submit" className="border-button">Send Message</button>
                                        </fieldset>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RequestCall