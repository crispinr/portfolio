import React from "react";
import NavBar from "../components/NavBar";
import Bonfire from "../assets/images/Bonfire.jpg";

export default function home() {
  return (
    <>
      <NavBar />
      <section id="hero">
        <div className="container d-flex flex-column justify-content-evenly align-items-center vh-100">
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
        className="container d-flex flex-column justify-content-center align-items-center"
      >
        <h3 className="cyan-txt mt-5">About Me</h3>
        <div className="d-flex justify-content-center align-items-center">
          <img src={Bonfire} alt="bonfire" className="img-card" />
          <p className="ms-5 w-50">
            A sophomore who loves to develop cool stuff and likes facts, art
            &amp; crafts, space, music, and &lt;code /&gt;. I'm currently
            pursuing my Bachelor of Technology in Information Technology at
            Loyola - ICAM College of Engineering and Technology.
          </p>
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
