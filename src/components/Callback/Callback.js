import React from "react";
import "./Callback.css"

const Callback = () => {
    return (
        <div className="request-form">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h4>Request a call back right now ?</h4>
                        <span>Click the contact button for options on how to reach Lorne.</span>
                    </div>
                    <div className="col-md-4">
                        <a href="contact.html" className="border-button">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Callback;