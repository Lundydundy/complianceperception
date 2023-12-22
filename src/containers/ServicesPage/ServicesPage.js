import ServicePageHead from "../../components/ServicePageComp/ServicePageHead/ServicePageHead";
import Footer from "../../components/Footer/Footer";
import ServiceInfo from "../../components/ServicePageComp/ServicesInfo/ServicesInfo";
import React, {useState} from "react";

const ServicePage = (props) => {
    const { page, changePage } = props;
    const [tab, setTab] = useState("tabs-1")

    const changeTab = (tab) => {
        setTab(tab)
    }

    return (
        <div className="animate__animated animate__fadeIn">
            <ServicePageHead page={page} changePage={changePage}/>
            <ServiceInfo changeTab={changeTab} tab={tab}/>
            <Footer page={page} changePage={changePage} />
        </div>
    )
}

export default ServicePage