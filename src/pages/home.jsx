import React from "react";
import NavBar from "../components/NavBar";
import Bonfire from "../assets/images/Bonfire.jpg";

export default function home() {
  return (
    <>
      <NavBar />
      <section id="hero">
        <div className="container w-75 text-center d-flex flex-column justify-content-evenly align-items-center vh-100">
          <div className="d-flex flex-column justify-content-center align-items-center h-50 w-100">
            <h3 className="display-4">Hola, Universe!</h3>
            <h6 className="fs-3 mt-5 lblue-txt">
              “I am so clever that sometimes I don't understand a single word of
              what I am saying.”
            </h6>
            <h6 className="align-self-end w-25 mt-3 fs-5 lblue-txt">
              - Oscar Wilde
            </h6>
          </div>
          <hr className="w-25 lblue-bg" />
        </div>
      </section>
      <section
        id="about"
        className="container w-50 d-flex flex-column justify-content-center align-items-center"
      >
        <h3 className="cyan-txt mt-5">About Me</h3>
        <div className="d-flex justify-content-center align-items-center">
          <img src={Bonfire} alt="bonfire" className="img-card" />
          <p className="ms-5">
            A sophomore who loves to develop cool stuff and likes facts, art
            &amp; crafts, space, music, and &lt;code /&gt;. I'm currently
            pursuing my Bachelor of Technology in Information Technology at
            Loyola - ICAM College of Engineering and Technology.
          </p>
        </div>
      </section>
      <section className="d-flex flex-column justify-content-center align-items-center">
        <h3 className="cyan-txt mt-5">Languages</h3>
        <div className="w-25 mt-4 d-flex justify-content-evenly align-items-center">
          <img
            src="https://img.shields.io/badge/-Python-101B2C?&logo=Python"
            alt="python"
            className="img-shield"
          />
          <img
            src="https://img.shields.io/badge/-Python-101B2C?&logo=Python"
            alt="python"
            className="img-shield"
          />
          <img
            src="https://img.shields.io/badge/-Python-101B2C?&logo=Python"
            alt="python"
            className="img-shield"
          />
          <img
            src="https://img.shields.io/badge/-Python-101B2C?&logo=Python"
            alt="python"
            className="img-shield"
          />
        </div>
        <h3 className="cyan-txt mt-5">Technologies</h3>
        <div className="w-25 mt-4 d-flex justify-content-evenly align-items-center">
          <img
            src="https://img.shields.io/badge/-React-101B2C?&logo=React"
            alt="python"
            className="img-shield"
          />
          <img
            src="https://img.shields.io/badge/-React-101B2C?&logo=React"
            alt="python"
            className="img-shield"
          />
          <img
            src="https://img.shields.io/badge/-React-101B2C?&logo=React"
            alt="python"
            className="img-shield"
          />
          <img
            src="https://img.shields.io/badge/-React-101B2C?&logo=React"
            alt="python"
            className="img-shield"
          />
        </div>
      </section>
      <section
        id="experience"
        className="d-flex justify-content-center align-items-center mt-5"
      >
        <div className="w-75 d-flex justify-content-around align-items-start">
          <div className="d-flex flex-column justify-content-evenly align-items-start">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3 className="cyan-txt align-self-center mb-5">Education</h3>
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
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
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
            </div>
          </div>
          <div className="d-flex flex-column justify-content-evenly align-items-start">
            <div className="d-flex flex-column justify-content-center align-items-start">
              <h3 className="cyan-txt align-self-center mb-5">Experience</h3>
              <h3 className="cyan-txt">
                &#9679;
                <span className="ms-2 h5 fw-bold">PATTARAI</span>
              </h3>
              <div className="timeline p-3 ms-2">
                <span className="h6 py-1 px-2 btn-lblue rounded-3 white-txt fw-bold">
                  2021 - Present
                </span>
                <p className="mt-3">Assistant Vice President of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-75">
          <h3 className="cyan-txt my-5 text-center">Projects</h3>
          <div className="d-flex justify-content-around align-items-center">
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className="card proj-card p-3">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start">
                    pattarai-website-v2
                  </h5>
                  <p class="card-text mt-4">
                    The official v2 website of PATTARAI - a tech community based
                    in Chennai.
                  </p>
                  <div className="align-self-end">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                  </div>
                </div>
              </div>
              <div className="card proj-card p-3 mt-5">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start">
                    pattarai-website-v2
                  </h5>
                  <p class="card-text mt-4">
                    The official v2 website of PATTARAI - a tech community based
                    in Chennai.
                  </p>
                  <div className="align-self-end">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className=" d-flex flex-column justify-content-center align-items-center">
              <div className="card proj-card p-3">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start">
                    pattarai-website-v2
                  </h5>
                  <p class="card-text mt-4">
                    The official v2 website of PATTARAI - a tech community based
                    in Chennai.
                  </p>
                  <div className="align-self-end">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                  </div>
                </div>
              </div>
              <div className="card proj-card p-3 mt-5">
                <div class="card-body d-flex flex-column justify-content-center align-items-center">
                  <h5 class="card-title align-self-start">
                    pattarai-website-v2
                  </h5>
                  <p class="card-text mt-4">
                    The official v2 website of PATTARAI - a tech community based
                    in Chennai.
                  </p>
                  <div className="align-self-end">
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                    <span className="badge cyan-bg rounded-pill black-txt me-2">
                      ReactJS
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="vh-100">cool</div>
      <div className="vh-100">cool</div>
      <div className="vh-100">cool</div>
      <div className="vh-100">cool</div>
      <div className="vh-100">cool</div>
      <div>cool</div>
    </>
  );
}
