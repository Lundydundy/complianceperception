import React from "react";
import './Landing.css'
import Navigation from "../../Navigation/Navigation";
import { Link } from "react-router-dom";
const Landing = (props) => {
    const {page, changePage} = props
    return (
        <div className="landing">
            <Navigation page = {page} changePage={changePage}/>
            <div className="text-content">
                <h6>Ready to help you</h6>
                <h4>Securities investment <br></br>compliance and consulting</h4>
                <p>Elevate your financial endeavours with all-encompassing services. From expert witness consultations, complaint handling, 
                    policy and procedure checkup, money laundering once-over, risk assessment reflection and compliance and supervision scan. 
                    Lorne is your trusted consultant for compliance and success in the intricate world of finance.</p>
                <Link onClick={() => changePage("contact")} to="/contact" className="filled-button">contact</Link>
            </div>
        </div>
    )
}

export default Landing;