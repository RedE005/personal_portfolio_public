import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

function Contact() {
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [phone, setPhone] = useState();
  const [userquery, setUserquery] = useState();
  const userId = process.env.REACT_APP_API_KEY;
  const templateId = process.env.REACT_APP_TEMPLATE_KEY;
  const serviceId = process.env.REACT_APP_SERVICE_ID;

  function handleSubmit(e) {
    e.preventDefault();
    if (emailValidation()) {
      emailjs.sendForm(serviceId, templateId, e.target, userId).then(
        (result) => {
          toast.success(
            "Thanks! Your query is submitted, I will get back to you shortly.",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        },
        (errors) => {
          toast.error(
            "Oops! Form submission failed. Please try again later. ",
            {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            }
          );
        }
      );
      //alert("Your query is submitted!");
      setEmail("");
      setName("");
      setPhone("");
      setUserquery("");
    } else {
      toast.error("Enter a valid Email Address", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  }
  function emailValidation() {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    return emailRegex.test(email);
  }

  return (
    <div className="container-9 w-container">
      <section className="hero-heading-right">
        <h3>
          <span className="text-span-21">
            Want to connect? Use the following means to get in touch with me:
          </span>
        </h3>
        <ol>
          <li>
            <h5>
              <span className="text-span-22">Email: </span>
              <ul>
                <li>
                  Feel free to drop me an email at{" "}
                  <span className="hide-mobile-text-span-20-email">
                    shivaramreddybethi@gmail.com
                  </span>
                  <span className="show-mobile-text-span-20-email">
                    shivaramreddybethi @gmail.com
                  </span>
                  . I'm always excited to connect and discuss new opportunities!
                </li>
              </ul>
            </h5>
          </li>
          <li>
            <h5>
              <span className="text-span-22">LinkedIn:</span>
              <ul>
                <li>
                  Visit my LinkedIn profile and send me a message. I'd love to
                  connect with like-minded professionals and explore
                  collaboration! @{" "}
                  <a
                    href="https://www.linkedin.com/in/shiva-ram-reddy-bethi-18a145177/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    Shiva Ram Reddy Bethi
                  </a>
                </li>
              </ul>
            </h5>
          </li>
          <li>
            <h5>
              <span className="text-span-22">
                Just fill out this form, and I'll reach out to you shortly!
              </span>
            </h5>
          </li>
        </ol>
        <section className="hero-heading-right-contactForm">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></input>

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            ></input>

            <label htmlFor="query">Query:</label>
            <textarea
              id="query"
              name="query"
              value={userquery}
              onChange={(e) => {
                setUserquery(e.target.value);
              }}
            ></textarea>

            <button type="submit">Submit</button>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>
        </section>
      </section>
    </div>
  );
}

export default Contact;
