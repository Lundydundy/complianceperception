import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"

const Navigation = (props) => {
    const {page, changePage} = props
    return (
        <nav className="navbar navbar-expand-lg" style={page !== "landing" ? {background : "rgba(0,0,0,0.6)"} : {background: "transparent"}}  data-bs-theme="dark">
            <div className="container-fluid">
            <Link style={{textDecoration: "none", marginLeft: "5%"}} to="/" className="navbar-brand" href="#">Compliance Perception</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link style={{textDecoration: "none"}} exact to="/" className={page === "landing" ? "nav-link active" : "nav-link"} onClick={() => changePage("landing")}>Home</Link>
                        <a href="#services" style={ page !== "landing" ? { display: "none", textDecoration: "none"} : { display: "block", textDecoration: "none"}}  className={page === "service" ? "nav-link active" : "nav-link"} onClick={() => changePage("service")} >Services</a>
                        <a href="#about" style={ page !== "landing" ? { display: "none", textDecoration: "none"} : { display: "block", textDecoration: "none"}}  className={page === "about" ? "nav-link active" : "nav-link"}  onClick={() => changePage("about")}>About</a>
                        <Link style={{textDecoration: "none"}} to="/contact"  className={page === "contact" ? "nav-link active" : "nav-link"} onClick={() => changePage("contact")} >Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation