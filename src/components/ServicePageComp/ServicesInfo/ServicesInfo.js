import "./ServiceInfo.css"
import service01 from "./service_01.jpg"
import service02 from "./service_02.jpg"
import service03 from "./service_03.jpg"
import service04 from "./images/policies.jpg"
import service05 from "./images/moneylaun2.jpg"
import service06 from "./images/registration.jpg"

const ServiceInfo = (props) => {

    const { changeTab, tab } = props
    return (
        <div class="single-services">
            <div class="container">
                <div class="row" id="tabs">
                    <div class="col-md-4">
                        <ul>
                            <li onClick={() => changeTab("tabs-1")}><a style={tab === "tabs-1" ? { color: "white" } : { color: "black" }}>Expert Witness<i class="fa fa-angle-right"></i></a></li>
                            <li onClick={() => changeTab("tabs-2")}><a style={tab === "tabs-2" ? { color: "white" } : { color: "black" }}>Complaint Handling<i class="fa fa-angle-right"></i></a></li>
                            <li onClick={() => changeTab("tabs-3")}><a style={tab === "tabs-3" ? { color: "white" } : { color: "black" }}>Policies, Procedures<i class="fa fa-angle-right"></i></a></li>
                            <li onClick={() => changeTab("tabs-4")}><a style={tab === "tabs-4" ? { color: "white" } : { color: "black" }}>Money Laundering<i class="fa fa-angle-right"></i></a></li>
                            <li onClick={() => changeTab("tabs-5")}><a style={tab === "tabs-5" ? { color: "white" } : { color: "black" }}>Risk Assessment<i class="fa fa-angle-right"></i></a></li>
                            <li onClick={() => changeTab("tabs-6")}><a style={tab === "tabs-6" ? { color: "white" } : { color: "black" }}>Compliance and Supervision<i class="fa fa-angle-right"></i></a></li>
                        </ul>
                    </div>
                 
                    <div class="col-md-8">
                        <section class='tabs-content'>
                            <article style={tab === "tabs-1" ? { display: "inline-block" } : { display: "none" }} id='tabs-1' class="animate__animated animate__fadeIn">
                                <img loading="lazy" src={service01} alt="" />
                                <h4>Expert Witness</h4>
                                <p>As an expert witness in the securities industry, Lorne is someone qualified with special knowledge, skills, training and experience to express an opinion based on information personally observed or provided by others.
                                    An expert’s duty is to assist the court and not to be an advocate for any party.</p>
                            </article>
                            <article style={tab === "tabs-2" ? { display: "inline-block" } : { display: "none" }} id='tabs-2' class="animate__animated animate__fadeIn">
                                <img loading="lazy" src={service02} alt="" />
                                <h4>Complaint Handling</h4>

                                <p> Lorne’s approach to complaint handling is to provide a fair, person-focused, time sensitive, 
                                    complaint resolution process with clearly communicated outcomes and reasons.</p>
                            </article>

                            <article style={tab === "tabs-3" ? { display: "inline-block" } : { display: "none" }} id='tabs-3' class="animate__animated animate__fadeIn">
                                <img loading="lazy" src={service04} alt="" />
                                <h4>Policies, Procedures</h4>
                                <p>Your policies are your firm’s rules and guidelines for how your firm and employees are to achieve your specific goals. 
                                    The procedures are the instructions on how the policies are to be met. 
                                    Lorne can help you maintain and implement effective policies and procedures.</p>
                            </article>
                            <article style={tab === "tabs-4" ? { display: "inline-block" } : { display: "none" }} id='tabs-4' class="animate__animated animate__fadeIn">
                                <img loading="lazy" src={service05} alt="" />
                                <h4>Money Laundering</h4>
                                <p>Money laundering is the illegal process of making large amounts of money generated by criminal activity appear to have come from a legitimate source. 
                                    The prevention of money laundering has become an international effort. Lorne can assist your firm’s effort to combat money laundering.
                                </p>
                            </article>
                            <article style={tab === "tabs-5" ? { display: "inline-block" } : { display: "none" }} id='tabs-5' class="animate__animated animate__fadeIn">
                                <img loading="lazy" src={service03} alt="" />
                                <h4>Risk Assessment</h4>
                                <p>Lorne can assist to identify and evaluate risks and hazards to your enterprise and provide guidance to manage and mitigate those risks.</p>
                            </article>
                            <article style={tab === "tabs-6" ? { display: "inline-block" } : { display: "none" }} id='tabs-6' class="animate__animated animate__fadeIn">
                                <img loading="lazy" src={service06} alt="" />
                                <h4>Compliance and Supervision</h4>
                                <p>Compliance and supervision are an integral part of a firm’s general business activities. 
                                    Lorne can help your firm defined and manage the specific roles and responsibilities with respect to the compliance and supervisory roles and tasks. 
                                </p>
                            </article>

                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceInfo