/* eslint-disable jsx-a11y/img-redundant-alt */
import ServiceNow from "./ServiceNow.png";
import NCR from "./NCRCorporation.png";

function Work() {
  return (
    <div className="container-9 w-container">
      <section
        className="hero-heading-right"
      >
        <div className="container-10">
          <div className="hero-wrapper">
            <div className="hero-split">
              <img
                src={ServiceNow}
                loading="lazy"
                sizes="100vw"
                srcset={ServiceNow}
                alt="Photo of ServiceNow"
                className="shadow-two"
              />
            </div>
            <div className="hero-split">
              <h1 className="heading-40"><span className="text-span-21">Software Engineer II</span></h1>
              <div>
                <strong><span className="text-span-22">March'23 - Present</span></strong>
              </div>
              <p className="margin-bottom-24px">
                Working in Strategic Portfolio Management Engineering team,
                which enables you to make the right decisions and leverage
                digital transformation. Plan, deliver, and track value across
                different methodologies in IT Business Management. Developed a
                full-stack WebApp using customised JavaScript framework called
                Glide, JSX, NodeJs, which is used to create and cascade goals of
                an organization.
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        data-w-id="bd5ed600-3596-cab5-ddac-87a662eed0c1"
        className="hero-heading-right"
      >
        <div className="container-10">
          <div className="hero-wrapper">
            <div className="hero-split">
              <img
                src={NCR}
                loading="lazy"
                sizes="100vw"
                srcset={NCR}
                alt="Photo of NCR Corporation"
                className="shadow-two"
              />
            </div>
            <div className="hero-split">
              <ul>
                <li>
                  <h1 className="heading-41"><span className="text-span-21">Software Engineer I</span></h1>
                  <div>
                    <strong><span className="text-span-22">Oct'20 - Mar'23</span></strong>
                  </div>
                  <p className="margin-bottom-24px">
                    Worked in core development of ATM software product (Activate
                    Enterprise) used by many multi-national banks to handle the
                    flow of transactions at back-end of an ATM. Developed APIs
                    to revive the health of an ATM using .Net Framework, C# and
                    Jenkins. Developed a Windows Forms App using .Net Framework
                    which is used to log the API calls made in the transaction
                    flow.
                    <br />
                  </p>
                </li>
                <li>
                  <h1 className="heading-41"><span className="text-span-21">Software Engineer Intern</span></h1>
                  <div>
                    <strong><span className="text-span-22">Jan'20 - Oct'20</span></strong>
                  </div>
                  <p className="margin-bottom-24px">
                    Worked on an internal tool called XFS Simulator which helps
                    in simulating the ATM application on development systems.
                    Used Java, SpringBoot to work on the internal tool.
                    Performed automation of the transactional test cases through
                    Robot Framework, Selenium Library and AutoIT tool.
                    <br />
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Work;
