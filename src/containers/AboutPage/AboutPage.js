import AboutPageHead from "../../components/AboutPageComp/AboutPageHead/AboutPageHead";
import AboutText from "../../components/AboutPageComp/AboutText/AboutText";
import Footer from "../../components/Footer/Footer";

const AboutPage = (props) => {
    const { page, changePage } = props;
    return (
        <div className="animate__animated animate__fadeIn">
            <AboutPageHead page={page} changePage={changePage} />
            <AboutText />
            <Footer page={page} changePage={changePage}/>
        </div>
    )
}

export default AboutPage