import React from "react";

// Component imports
import NavBar from "../components/NavBar";

// Asset imports
import bonfire from "../assets/images/Bonfire.jpg";
import fireIcon from "../assets/images/Fire_Icon.svg";

// Icon imports
import {
  SiDiscord,
  SiWhatsapp,
  SiGithub,
  SiTwitter,
  SiInstagram,
  SiLinkedin,
} from "react-icons/si";
import {
  DiPython,
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiJava,
  DiBootstrap,
  DiGithubBadge,
  DiGit,
  DiHeroku,
  DiNpm,
  DiReact,
} from "react-icons/di";
import { SiAdobeillustrator, SiAdobexd } from "react-icons/si";

export default function Home() {
  // Get current year
  const date = new Date();
  const currentYear = date.getFullYear();

  return (
    <>
      {/* NavBar component */}
      <NavBar />
      {/* Hero section */}
      <section id="hero">
        <div className="container col-md-6 mx-auto text-center d-flex flex-column justify-content-center align-items-center vh-100">
          <div className="d-flex flex-column justify-content-center align-items-center h-50 w-100 mt-md-5 mt-0">
            <h3 className="display-4 my-5">Hola, Universe!</h3>
            <h6 className="fs-3 lblue-txt">
              “I am so clever that sometimes I don't understand a single word of
              what I am saying.”
            </h6>
            <h6 className="w-md-25 mt-3 fs-5 lblue-txt">- Oscar Wilde</h6>
          </div>
          <hr className="w-25 lblue-bg" />
        </div>
      </section>
      {/* About section */}
      <section
        id="about"
        className="container col-md-6 mx-auto text-center d-flex flex-column justify-content-center align-items-center"
      >
        <h3 className="cyan-txt my-5">About Me</h3>
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center">
          <img src={bonfire} alt="bonfire" className="img-card" />
          <p className="ms-md-5 mt-md-0 mt-5">
            A sophomore who loves to develop cool stuff and likes facts, art
            &amp; crafts, space, music, and &lt;code /&gt;. I'm currently
            pursuing my Bachelor of Technology in Information Technology at
            Loyola - ICAM College of Engineering and Technology.
          </p>
        </div>
      </section>
      {/* Tech section */}
      <section className="container d-flex flex-column justify-content-center align-items-center">
        <h3 className="cyan-txt mt-5">Languages</h3>
        <div className="mt-4 text-center">
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiPython color="" size="20px" /> Python
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiJsBadge color="" size="20px" /> JavaScript
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiHtml5 color="" size="20px" /> HTML5
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiCss3 color="" size="20px" /> CSS3
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiJava color="" size="20px" /> Java
          </h6>
        </div>
        <h3 className="cyan-txt mt-5">Technologies</h3>
        <div className="mt-4 text-center">
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiBootstrap color="" size="20px" /> Bootstrap
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiGithubBadge color="" size="20px" /> Github
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiGit color="" size="20px" /> Git
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiHeroku color="" size="20px" /> Heroku
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <SiAdobeillustrator color="" size="20px" /> Illustrator
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiNpm color="" size="20px" /> npm
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <DiReact color="" size="20px" /> React
          </h6>
          <h6 className="badge rounded-pill hero-br white-txt py-1 px-2 me-2">
            <SiAdobexd color="" size="20px" /> Xd
          </h6>
        </div>
      </section>
      {/* Experience section */}
      <section
        id="experience"
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <div className="w-75 d-flex flex-md-row flex-column justify-content-around align-items-start">
          <div>
            <h3 className="cyan-txt text-center my-5">Education</h3>
            <div className="d-flex flex-column justify-content-evenly align-items-start">
              <h3 className="cyan-txt">
                &#9679;
                <span className="ms-2 h5 fw-bold">
                  B. TECH INFORMATION TECHNOLOGY
                </span>
              </h3>
              <div className="timeline p-3 ms-2">
                <span className="h6 py-1 px-2 btn-lblue rounded-3 white-txt fw-bold">
                  September 2020 - Present
                </span>
                <p className="mt-3">
                  Loyola ICAM College of Engineering and Technology, Chennai
                </p>
              </div>
              <div className="d-flex flex-column justify-content-center align-items-start">
                <h3 className="cyan-txt">
                  &#9679;
                  <span className="ms-2 h5 fw-bold">HSC &amp; SSLC</span>
                </h3>
                <div className="timeline p-3 ms-2">
                  <span className="h6 py-1 px-2 btn-lblue rounded-3 white-txt fw-bold">
                    2011 - 2020
                  </span>
                  <p className="mt-3">
                    St. Mary's Anglo Indian Hr. Sec. School, Chennai
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="cyan-txt text-center my-5">Experience</h3>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3 className="cyan-txt">
                &#9679;
                <span className="ms-2 h5 fw-bold">PATTARAI</span>
              </h3>
              <div className="timeline p-3 ms-2">
                <span className="h6 py-1 px-2 btn-lblue rounded-3 white-txt fw-bold text-left">
                  December 2021 - Present
                </span>
                <p className="mt-3">Assistant Vice President of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Projects section */}
      <section
        id="projects"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-75 container">
          <h3 className="cyan-txt my-5 text-center">Projects</h3>
          <div className="d-flex flex-md-row flex-column justify-content-around align-items-center">
            <div className=" d-flex flex-column justify-content-center align-items-center me-0 me-md-5">
              <div className="card proj-card p-3">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start lblue-txt fw-bold">
                    pattarai-website-v2
                  </h5>
                  <p class="card-text mt-3">
                    The official v2 website of PATTARAI - a tech community based
                    in Chennai.
                  </p>
                  <div className="align-self-start">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      reactjs
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      bootstrap
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      threejs
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      framer-motion
                    </span>
                  </div>
                </div>
              </div>
              <div className="card proj-card p-3 mt-5 mb-md-0 mb-5">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start lblue-txt fw-bold">
                    project-helix
                  </h5>
                  <p class="card-text mt-3">
                    A workshop hub platform with live interaction to enhance
                    users learning experience.
                  </p>
                  <div className="align-self-start">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      reactjs
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      bootstrap
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      firebase
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      framer-motion
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      particlesjs
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      live-chat
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <div className="card proj-card p-3">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start lblue-txt fw-bold">
                    integratable-chat-app
                  </h5>
                  <p class="card-text mt-3">
                    An integratable live chat widget based on socket.io,
                    express.js and react.js.
                  </p>
                  <div className="align-self-start">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      reactjs
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      expressjs
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      socketio
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      firebase
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      widget
                    </span>
                  </div>
                </div>
              </div>
              <div className="card proj-card p-3 mt-5">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start lblue-txt fw-bold">
                    mr-bot
                  </h5>
                  <p class="card-text mt-3">
                    A whatsapp bot that'll fetch resourses from the internet and
                    makes your life easier.
                  </p>
                  <div className="align-self-start">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      python
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      flask
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      twilio
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      chat-bot
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      whatsapp
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact section */}
      <section
        id="contact"
        className="container col-md-6 d-flex flex-column justify-content-center align-items-center mt-5"
      >
        <h3 className="cyan-txt text-center">Contact</h3>
        <div className="d-flex flex-md-row flex-column justify-content-around align-items-center mt-4">
          <img src={fireIcon} alt="fireIcon" className="custom-fireicon" />
          <div className="col-md-6 d-flex flex-column text-center mt-5">
            <h3 className="lblue-txt">I'd love to hear from you!</h3>
            <p className="mt-5">
              Got a project you would like me to work on? Or how about just a
              friendly chat?
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <div className="mt-5">
            <div className="">
              <a
                href="https://discordapp.com/channels/@me/crispin#7007/"
                className="btn social-icon rounded-circle me-2"
              >
                <SiDiscord className="lblue-txt" />
              </a>
              <a
                href="https://wa.me/+919789933204"
                className="btn social-icon rounded-circle me-2"
              >
                <SiWhatsapp className="lblue-txt" />
              </a>
              <a
                href="https://github.com/crispinr"
                className="btn social-icon rounded-circle me-2"
              >
                <SiGithub className="lblue-txt" />
              </a>
              <a
                href="https://twitter.com/crispinr_"
                className="btn social-icon rounded-circle me-2"
              >
                <SiTwitter className="lblue-txt" />
              </a>
              <a
                href="https://www.instagram.com/_crispinr_"
                className="btn social-icon rounded-circle me-2"
              >
                <SiInstagram className="lblue-txt" />
              </a>
              <a
                href="https://www.linkedin.com/in/crispinr"
                className="btn social-icon rounded-circle"
              >
                <SiLinkedin className="lblue-txt" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer section */}
      <section
        id="footer"
        className="d-flex flex-column justify-content-center align-items-center my-5"
      >
        <hr className="w-50 lblue-bg" />
        <h6 className="mb-5">© {currentYear} Crispin R.</h6>
      </section>
    </>
  );
}
