import { useState } from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import AboutPage from './containers/AboutPage/AboutPage';

import LandingPage from './containers/LandingPage/LandingPage';
import ServicePage from './containers/ServicesPage/ServicesPage';
import ContactPage from './containers/ContactPage/ContactPage';


function App() {
  const [page, setPage] = useState("landing");

  const changePage = (page) => {
    setPage(page)
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }

  if (page === "landing") {
    return (
      <div className="App">
        <LandingPage page={page} changePage={changePage} />
        <Footer page={page} changePage={changePage}/>
      </div>
    )
  } else if (page === "about") {
    return (
      <div className="App">
        <AboutPage page={page} changePage={changePage} />
        <Footer page={page} changePage={changePage}/>
      </div>
    )
  } else if (page === "service") {
    return (
      <div className="App">
        <ServicePage page={page} changePage={changePage} />
        <Footer page={page} changePage={changePage}/>
      </div>
    )
  }else {
    return (
      <div className="App">
        <ContactPage page={page} changePage={changePage} />
        <Footer page={page} changePage={changePage}/>
      </div>
    )
  }
}

export default App;
