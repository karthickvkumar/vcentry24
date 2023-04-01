import React, {useState} from "react";

import HeaderComponent from "../components/header";
import AdventureComponent from "../components/adventure";
import TourListComponent from "../components/tour-list";
import AskQuoteComponent from "../components/ask-quote";
import HotelFilterComponent from "../components/hotel-filter";
import DestinationFilterComponent from "../components/destination-filter";
import FooterComponent from "../components/footer";

const HomeScreen = () => {

  const [filter, updateFilterOption] = useState(true);

  const showHotelFilter = () => {
    updateFilterOption(true);
  }
  
  const showTourFilter = () => {
    updateFilterOption(false);
  }

  const tourList = [
    {
      destinationName : "India",
      destinationImage : "https://holidify.com/images/bgImages/INDIA.jpg",
      destinationCount : 25
    },
    {
      destinationName : "Singapore",
      destinationImage : "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180221131008/iStock-627935066.jpg",
      destinationCount : 8
    },
    {
      destinationName : "Maldives",
      destinationImage : "https://static.india.com/wp-content/uploads/2020/06/Maldives1.jpg",
      destinationCount : 4
    }
  ]

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
                    <div className="nav nav-pills text-center">
                      
                      <span className={filter ? "nav-link hand-mouse active" : "nav-link hand-mouse highlight "} onClick={() => showHotelFilter()}>Hotel</span>
                      
                      <span className={filter ? "nav-link mr-md-1 hand-mouse highlight" : "nav-link mr-md-1 hand-mouse active"}  onClick={() => showTourFilter()}>Search Tour</span>

                    </div>
                  </div>
                  <div className="col-md-12 tab-wrap">

                    <div className="tab-content" id="v-pills-tabContent">
                      {
                        filter ?
                          <HotelFilterComponent></HotelFilterComponent>
                        :
                          <DestinationFilterComponent></DestinationFilterComponent>
                      }
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
          {
                tourList.map((value, index) => {
                  return(
                    <TourListComponent {...value}></TourListComponent>
                  )
                })
              }
            
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