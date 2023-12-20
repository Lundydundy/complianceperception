import ServicePageHead from "../../components/ServicePageHead/ServicePageHead";

const ServicePage = (props) => {
    const { page, changePage } = props;
    return (
        <div className="animate__animated animate__fadeIn">
            <ServicePageHead page={page} changePage={changePage}/>
        </div>
    )
}

export default ServicePage