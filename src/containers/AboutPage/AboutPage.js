import AboutPageHead from "../../components/AboutPageHead/AboutPageHead";
import Navigation from "../../components/Navigation/Navigation"

const AboutPage = (props) => {
    const { page, changePage } = props;
    return (
        <div className="animate__animated animate__fadeIn">
            <AboutPageHead page={page} changePage={changePage} />
        </div>
    )
}

export default AboutPage