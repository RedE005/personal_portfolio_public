/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
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
  const [isMobileDropDownSelected, setMobileDropDownSelected] = useState(false);
  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setMobileDropDownSelected(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const home = ReactDOM.createRoot(document.getElementById("content"));

  function handleNameClick(e) {
    e.preventDefault();
    setMobileDropDownSelected(false);

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
    setMobileDropDownSelected(false);
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
    setMobileDropDownSelected(false);

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
    setMobileDropDownSelected(false);

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
    setMobileDropDownSelected(false);

    if (isContactClicked) {
      setContactClicked(!isContactClicked);
    }
    if (isEducationClicked) {
      setEducationClicked(!isEducationClicked);
    }
    if (isWorkExClicked) {
      setWorkExClicked(!isWorkExClicked);
    }
    const url =
      "https://drive.google.com/file/d/1Hn76XjzNeqFaRH2vpB8Ni0MGEeD8vBXB/view?usp=sharing";
    window.open(url, "_blank");
  }

  return (
    <div>
      <div className="wideScreenView">
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
            <a
              href=""
              onClick={handleNameClick}
              aria-current="page"
              className="w-nav-brand w--current"
            >
              <strong>SHIVA RAM REDDY BETHI</strong>
            </a>
            <div>
              <nav role="navigation" className="navigation-items w-nav-menu">
                <a
                  href=""
                  onClick={handleWorkExClick}
                  className={`navigation-item w-nav-link ${
                    isWorkExClicked ? "w--current" : " "
                  }`}
                >
                  Work Experience
                </a>
                <a
                  href=""
                  onClick={handleEducationClick}
                  className={`navigation-item w-nav-link ${
                    isEducationClicked ? "w--current" : " "
                  }`}
                >
                  Qualifications
                </a>
                <a
                  href=""
                  onClick={handleContactClick}
                  className={`navigation-item w-nav-link ${
                    isContactClicked ? "w--current" : " "
                  }`}
                >
                  Contact
                </a>
                <a
                  href=""
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
      </div>
      <div className="mobileScreenView">
        <div
          data-collapse="medium"
          data-animation="default"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navigation w-nav"
        >
          <div className="menu-container" ref={dropdownRef}>
            <div className="menu-icon" onClick={()=>{setMobileDropDownSelected(!isMobileDropDownSelected)}}>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
              <div className="menu-line"></div>
            </div>
            <div className={`dropdown-content ${isMobileDropDownSelected ? 'open-dropdown' : ''}`}>
              <a
                href=""
                onClick={handleWorkExClick}
                className={`navigation-item w-nav-link ${
                  isWorkExClicked ? "w--current" : " "
                }`}
              >
                Work Experience
              </a>
              <a
                href=""
                onClick={handleEducationClick}
                className={`navigation-item w-nav-link ${
                  isEducationClicked ? "w--current" : " "
                }`}
              >
                Qualifications
              </a>
              <a
                href=""
                onClick={handleContactClick}
                className={`navigation-item w-nav-link ${
                  isContactClicked ? "w--current" : " "
                }`}
              >
                Contact
              </a>
              <a
                href=""
                onClick={handleResumeClick}
                className={`navigation-item w-nav-link ${
                  isResumeClicked ? "w--current" : " "
                }`}
              >
                RESUME
              </a>
            </div>
          </div>

          <div className="navigation-items">
            <a
              href=""
              onClick={handleNameClick}
              aria-current="page"
              className="w-nav-brand w--current"
            >
              <strong style={{ fontSize: "18px" }}>
                SHIVA RAM REDDY BETHI
              </strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
