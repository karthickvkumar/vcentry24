import React from "react";

import HeaderComponent from "../components/header";
import AdventureComponent from "../components/adventure";
import TourListComponent from "../components/tour-list";
import AskQuoteComponent from "../components/ask-quote";
import FooterComponent from "../components/footer";

const HomeScreen = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>

      <div className="hero-wrap js-fullheight header-banner" style={{"backgroundImage" : `url(${require("../images/bg_5.jpg")})`}}>
        <div className="overlay header-banner"></div>
        <div className="container">
          <div className="row no-gutters slider-text js-fullheight align-items-center">
            <div className="col-md-7">
              <span className="subheading">Welcome to Travelix</span>
              <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
              <p className="caps">Travel to the any corner of the world, without going around in circles</p>
            </div>

          </div>
        </div>
      </div>

      <section className="ftco-section ftco-no-pb ftco-no-pt">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="ftco-search d-flex justify-content-center">
                <div className="row">
                  <div className="col-md-12 nav-link-wrap">
                    <div className="nav nav-pills text-center" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                      
                      <a className="nav-link" id="v-pills-2-tab" data-toggle="pill" href="/v-pills-2" role="tab"
                      aria-controls="v-pills-2" aria-selected="false">Hotel</a>
                      
                      <a className="nav-link active mr-md-1" id="v-pills-1-tab" data-toggle="pill" href="/v-pills-1" role="tab"
                      aria-controls="v-pills-1" aria-selected="true">Search Tour</a>

                    </div>
                  </div>
                  <div className="col-md-12 tab-wrap">

                    <div className="tab-content" id="v-pills-tabContent">

                      <div className="tab-pane fade show active" id="v-pills-1" role="tabpanel"
                        aria-labelledby="v-pills-nextgen-tab">
                        <form action="/" className="search-property-1">
                          <div className="row no-gutters">
                            <div className="col-md d-flex">
                              <div className="form-group p-4 border-0">
                                <label htmlFor="/">Destination</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-search"></span></div>
                                  <input type="text" className="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="/">Check-in date</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-calendar"></span></div>
                                  <input type="text" className="form-control checkin_date" placeholder="Check In Date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="/">Check-out date</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-calendar"></span></div>
                                  <input type="text" className="form-control checkout_date" placeholder="Check Out Date" />
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group p-4">
                                <label htmlFor="/">Price Limit</label>
                                <div className="form-field">
                                  <div className="select-wrap">
                                    <div className="icon"><span className="fa fa-chevron-down"></span></div>
                                    <select name="" id="" className="form-control">
                                      <option value="">$100</option>
                                      <option value="">$10,000</option>
                                      <option value="">$50,000</option>
                                      <option value="">$100,000</option>
                                      <option value="">$200,000</option>
                                      <option value="">$300,000</option>
                                      <option value="">$400,000</option>
                                      <option value="">$500,000</option>
                                      <option value="">$600,000</option>
                                      <option value="">$700,000</option>
                                      <option value="">$800,000</option>
                                      <option value="">$900,000</option>
                                      <option value="">$1,000,000</option>
                                      <option value="">$2,000,000</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    className="align-self-stretch form-control btn btn-primary" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>

                      <div className="tab-pane fade" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
                        <form action="/" className="search-property-1">
                          <div className="row no-gutters">
                            <div className="col-lg d-flex">
                              <div className="form-group p-4 border-0">
                                <label htmlFor="/">Destination</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-search"></span></div>
                                  <input type="text" className="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg d-flex">
                              <div className="form-group p-4 border-0">
                                <label htmlFor="/">Location/Area</label>
                                <div className="form-field">
                                  <div className="icon"><span className="fa fa-location-arrow"></span></div>
                                  <input type="text" className="form-control" placeholder="Search place" />
                                </div>
                              </div>
                            </div>
                            <div className="col-lg d-flex">
                              <div className="form-group d-flex w-100 border-0">
                                <div className="form-field w-100 align-items-center d-flex">
                                  <input type="submit" value="Search"
                                    className="align-self-stretch form-control btn btn-primary p-0" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
      </section>

      <AdventureComponent></AdventureComponent>

      <section className="ftco-sections">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Destination</span>
              <h2 className="mb-4">Tour Destination</h2>
            </div>
          </div>
          <div className="row">
            <TourListComponent></TourListComponent>

            <TourListComponent></TourListComponent>
            
            <TourListComponent></TourListComponent>
            
          </div>
        </div>
      </section>

      <section className="ftco-sections">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Our Blog</span>
              <h2 className="mb-4">Recent Post</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a href="blog-single.html" className="block-20" style={{"backgroundImage": `url(${require("../images/image_1.jpg")})`}}>
                </a>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading"><a href="/">Most Popular Place In This World</a></h3>
                  {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                  <p><a href="/" className="btn btn-primary">Read more</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a href="blog-single.html" className="block-20" style={{"backgroundImage": `url(${require("../images/image_2.jpg")})`}}>
                </a>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading"><a href="/">Most Popular Place In This World</a></h3>
                  {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                  <p><a href="/" className="btn btn-primary">Read more</a></p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="blog-entry">
                <a href="blog-single.html" className="block-20" style={{"backgroundImage": `url(${require("../images/image_3.jpg")})`}}>
                </a>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading"><a href="/">Most Popular Place In This World</a></h3>
                  {/* <!-- <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p> --> */}
                  <p><a href="/" className="btn btn-primary">Read more</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <AskQuoteComponent></AskQuoteComponent>

     <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomeScreen;