import React, { useState } from "react";

function Education() {
  const [isActive, setActive] = useState(false);
  const [isActiveBachelors, setActiveBachelors] = useState(false);

  function handleMastersProject(e) {
    e.preventDefault();
    setActive(!isActive);
  }

  function handleBachelorsProject(e) {
    e.preventDefault();
    setActiveBachelors(!isActiveBachelors);
  }
  return (
    <div className="container-9 w-container">
      <section
        className="hero-heading-right"
      >
        <ul>
          <li>
            <div className="container-10">
              <h3>
                <strong><span className="text-span-21">Master's in Software Engineering</span></strong>
              </h3>
              <a
                href="https://www.sjsu.edu/"
                target="_blank"
                rel="noopener noreferrer"
                style={{display: "inline-block"}}
              >
                <h5>San José State University, California</h5>
              </a>
              <h6 className="margin-bottom-24px">
              <span className="text-span-22">2023 - Present</span>
                <br />
              </h6>
              <button
                className={`collapsible ${isActive ? "active" : " "}`}
                onClick={handleMastersProject}
              >
                &nbsp;&nbsp;View Projects
              </button>
              <div className={`content ${isActive ? "activecontent" : " "}`}>
                <p>
                  <ul>
                    <li>
                      <strong>
                        Blood Group Detection using TensorFlow and Machine
                        Learning Techniques{" "}
                        <span style={{ opacity: "0.5" }}>|</span> Python,
                        Pandas, LabelImg
                      </strong>
                      <br></br> Developed a blood group detection system using
                      TensorFlow and machine learning techniques. Leveraged the
                      power of Python and Pandas for efficient data manipulation
                      and preprocessing. Utilized the LabelImg tool to annotate
                      and label blood sample images, enabling accurate pattern
                      matching. Implemented advanced machine learning algorithms
                      to match and classify blood samples based on existing
                      images in the dataset. This innovative solution opens new
                      possibilities for automated blood group identification in
                      medical and research settings.
                    </li>
                    <li>
                      <strong>
                        Single Page Personal Portfolio Website{" "}
                        <span style={{ opacity: "0.5" }}>|</span> React, Node
                      </strong>
                      <br></br> Designed and developed a single page personal
                      portfolio website using React and Node. Leveraged the
                      power of React-Hooks for efficient state management,
                      ensuring seamless interactivity and enhanced user
                      experience. Implemented React-Dom for smooth re-rendering
                      of components, resulting in dynamic content updates.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </li>
          <li>
            <div className="container-10">
              <h3>
                <strong><span className="text-span-21">Bachelor's in Computer Science</span></strong>
              </h3>
              <a
                href="https://jntuh.ac.in/"
                target="_blank"
                rel="noopener noreferrer"
                style={{display: "inline-block"}}
              >
                <h5>Jawaharlal Nehru Technological University, India</h5>
              </a>
              <h5><span className="text-span-23">GPA</span>: 3.8/4.0</h5>
              <h6 className="margin-bottom-24px">
              <span className="text-span-22">2016 - 2020</span>
                <br />
              </h6>
              <button
                className={`collapsible ${isActiveBachelors ? "active" : " "}`}
                onClick={handleBachelorsProject}
              >
                &nbsp;&nbsp;View Projects
              </button>
              <div
                className={`content ${
                  isActiveBachelors ? "activecontent" : " "
                }`}
              >
                <p>
                  <ul>
                    <li>
                      <strong>
                        Credit Card Fraud Detection System using Logistic
                        Regression Algorithm{" "}
                        <span style={{ opacity: "0.5" }}>|</span> Python, NumPy,
                        Sklearn, Kaggle{" "}
                      </strong>
                      <br></br>
                      Implemented an advanced credit card fraud detection system
                      utilizing the logistic regression algorithm. Leveraging
                      Python, NumPy, Sklearn, and Kaggle, this project
                      successfully predicts whether a transaction is fraudulent
                      or non-fraudulent. The logistic regression model analyzes
                      patterns and classifies transactions based on a given
                      dataset. The system provides valuable insights for fraud
                      detection, contributing to improved security and risk
                      mitigation in the financial industry.
                    </li>
                    <li>
                      <strong>
                        Task Management Tool{" "}
                        <span style={{ opacity: "0.5" }}>|</span> MERN Stack{" "}
                      </strong>
                      <br></br> Engineered a robust task management application
                      using the MERN stack (MongoDB, Express.js, React,
                      Node.js), innovating team collaboration and organization.
                      Implemented real-time updates for seamless team
                      communication and progress tracking. Integrated user
                      authentication for secure access control and personalized
                      user experiences. The intuitive user interface fosters
                      enhanced productivity and efficient task management. This
                      tool streamlines workflows, improves coordination, and
                      empowers teams to achieve their goals with ease.
                    </li>
                    <li>
                      <strong>
                        Tic Tac Toe Android Game{" "}
                        <span style={{ opacity: "0.5" }}>|</span> Android
                        Studio, Java, Android SDK
                      </strong>{" "}
                      <br></br> Created an engaging Tic Tac Toe game for Android
                      devices using Android Studio and Java. This application
                      offers an immersive experience with player vs player and
                      player vs computer game modes. Users can enjoy friendly
                      matches with their friends or challenge the computer.
                      The game also provides customization options, allowing
                      players to personalize themes according to their
                      preferences.
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
export default Education;
