import React from "react"
import "./Navigation.css"

const Navigation = (props) => {
    const {page, changePage} = props
    return (
        <nav className="navbar navbar-expand-lg" style={page === "service" || page === "about" ? {background : "rgba(0,0,0,0.6)"} : {background: "transparent"}}  data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Compliance Perspective</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className={page === "landing" ? "nav-link active" : "nav-link"} onClick={() => changePage("landing")} >Home</a>
                        <a className={page === "about" ? "nav-link active" : "nav-link"}  onClick={() => changePage("about")}>About</a>
                        <a className={page === "service" ? "nav-link active" : "nav-link"} onClick={() => changePage("service")} >Services</a>
                        <a className={page === "contact" ? "nav-link active" : "nav-link"} onClick={() => changePage("contact")}>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation