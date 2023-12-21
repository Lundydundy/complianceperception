import ServicePageHead from "../../components/ServicePageComp/ServicePageHead/ServicePageHead";
import Footer from "../../components/Footer/Footer";

const ServicePage = (props) => {
    const { page, changePage } = props;
    return (
        <div className="animate__animated animate__fadeIn">
            <ServicePageHead page={page} changePage={changePage}/>
            <Footer page={page} changePage={changePage} />
        </div>
    )
}

export default ServicePage