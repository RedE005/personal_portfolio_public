/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.js";
import Work from "./Work.js";
import Education from "./Education.js";
import Contact from "./Contact.js";

function App() {
  const [isEducationClicked, setEducationClicked] = useState(false);
  const [isWorkExClicked, setWorkExClicked] = useState(false);
  const [isContactClicked, setContactClicked] = useState(false);
  const [isResumeClicked, setResumeClicked] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const home = ReactDOM.createRoot(document.getElementById("content"));

  function handleNameClick(e) {
    e.preventDefault();

    if (isWorkExClicked) {
      setWorkExClicked(!isWorkExClicked);
    }
    if (isResumeClicked) {
      setResumeClicked(!isResumeClicked);
    }
    if (isContactClicked) {
      setContactClicked(!isContactClicked);
    }
    if (isEducationClicked) {
      setEducationClicked(!isEducationClicked);
    }
    home.render(
      <React.StrictMode>
        <Home />
      </React.StrictMode>
    );
  }

  function handleWorkExClick(e) {
    e.preventDefault();
    setWorkExClicked(true);

    if (isResumeClicked) {
      setResumeClicked(!isResumeClicked);
    }
    if (isContactClicked) {
      setContactClicked(!isContactClicked);
    }
    if (isEducationClicked) {
      setEducationClicked(!isEducationClicked);
    }

    home.render(
      <React.StrictMode>
        <Work />
      </React.StrictMode>
    );
  }
  function handleEducationClick(e) {
    e.preventDefault();
    setEducationClicked(true);

    if (isResumeClicked) {
      setResumeClicked(!isResumeClicked);
    }
    if (isContactClicked) {
      setContactClicked(!isContactClicked);
    }
    if (isWorkExClicked) {
      setWorkExClicked(!isWorkExClicked);
    }

    home.render(
      <React.StrictMode>
        <Education />
      </React.StrictMode>
    );
  }

  function handleContactClick(e) {
    e.preventDefault();
    setContactClicked(true);

    if (isResumeClicked) {
      setResumeClicked(!isResumeClicked);
    }
    if (isEducationClicked) {
      setEducationClicked(!isEducationClicked);
    }
    if (isWorkExClicked) {
      setWorkExClicked(!isWorkExClicked);
    }

    home.render(
      <React.StrictMode>
        <Contact />
      </React.StrictMode>
    );
  }

  function handleResumeClick(e) {
    e.preventDefault();
    setResumeClicked(true);

    if (isContactClicked) {
      setContactClicked(!isContactClicked);
    }
    if (isEducationClicked) {
      setEducationClicked(!isEducationClicked);
    }
    if (isWorkExClicked) {
      setWorkExClicked(!isWorkExClicked);
    }
    const url = "https://drive.google.com/file/d/1nE-rxoDcmafd1_5iLr4uPfBKwFg9Bjuq/view?usp=sharing";
    window.open(url, "_blank");
  }

  return (
    <div
      data-collapse="medium"
      data-animation="default"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navigation w-nav"
    >
      <div className="navigation-items">
        <a href=""
          onClick={handleNameClick}
          aria-current="page"
          className="w-nav-brand w--current"
        >
          <strong>SHIVA RAM REDDY BETHI</strong>
        </a>
        <div>
          <nav role="navigation" className="navigation-items w-nav-menu">
            <a href=""
              onClick={handleWorkExClick}
              className={`navigation-item w-nav-link ${
                isWorkExClicked ? "w--current" : " "
              }`}
            >
              Work Experience
            </a>
            <a href=""
              onClick={handleEducationClick}
              className={`navigation-item w-nav-link ${
                isEducationClicked ? "w--current" : " "
              }`}
            >
              Qualifications
            </a>
            <a href=""
              onClick={handleContactClick}
              className={`navigation-item w-nav-link ${
                isContactClicked ? "w--current" : " "
              }`}
            >
              Contact
            </a>
            <a href=""
              onClick={handleResumeClick}
              className={`navigation-item w-nav-link ${
                isResumeClicked ? "w--current" : " "
              }`}
            >
              RESUME
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default App;
