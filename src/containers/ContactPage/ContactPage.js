import Navigation from "../../components/Navigation/Navigation"

const ContactPage = (props) => {
    const {page, changePage} = props
    return(
        <div className="animate__animated animate__fadeIn">
            <Navigation page={page} changePage={changePage} />
        </div>
    )
}

export default ContactPage