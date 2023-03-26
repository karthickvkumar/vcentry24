import React from "react";

import HeaderComponent from "../components/header";
import AdventureComponent from "../components/adventure";
import FooterComponent from "../components/footer";

const AboutScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>

      <section className="hero-wrap hero-wrap-2 js-fullheight" style={{"backgroundImage": `url(${require("../images/services-2.jpg")})`}}>
        <div className="overlay js-fullheight"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div className="col-md-9 pb-5 text-center">
              <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i
                      className="fa fa-chevron-right"></i></a></span> <span>About us <i className="fa fa-chevron-right"></i></span>
              </p>
              <h1 className="mb-0 bread">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <AdventureComponent></AdventureComponent>

      <section className="ftco-section ftco-about img" style={{"backgroundImage": `url(${require("../images/bg_4.jpg")})`}}>
        <div className="overlay"></div>
        <div className="container py-md-5">
          <div className="row py-md-5">

          </div>
        </div>
      </section>

      <section className="ftco-section ftco-about ftco-no-pt img">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 about-intro">
              <div className="row">
                <div className="col-md-6 d-flex align-items-stretch">
                  <div className="img d-flex w-100 align-items-center justify-content-center"
                    style={{"backgroundImage": `url(${require("../images/about-1.jpg")})`}}>
                  </div>
                </div>
                <div className="col-md-6 pl-md-5 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section">
                      <span className="subheading">About Us</span>
                      <h2 className="mb-4">Make Your Tour Memorable and Safe With Us</h2>
                      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live
                        the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large
                        language ocean.</p>
                      <p><a href="/" className="btn btn-primary">Book Your Destination</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default AboutScreen;