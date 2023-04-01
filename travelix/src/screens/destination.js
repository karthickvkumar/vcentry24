import React from "react";

import HeaderComponent from "../components/header";
import TourListComponent from "../components/tour-list";
import DestinationFilterComponent from "../components/destination-filter";
import FooterComponent from "../components/footer";

const DestinationScreen = () => {

  // MOCK DATA
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
    },
    {
      destinationName : "Malaysia",
      destinationImage : "https://holidify.com/images/bgImages/MALAYSIA.jpg",
      destinationCount : 10
    },
    {
      destinationName : "Dubai",
      destinationImage : "https://www.hoteliermiddleeast.com/cloud/2021/12/12/dubai-tourism-news-2021.jpg",
      destinationCount : 15
    }
  ]

  return(
    <div>
      <HeaderComponent></HeaderComponent>

      <section class="hero-wrap hero-wrap-2 js-fullheight" style={{"backgroundImage" : `url(${require("../images/bg_4.jpg")})`}}>
        <div class="overlay js-fullheight"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                      class="fa fa-chevron-right"></i></a></span> <span>Tour List <i class="fa fa-chevron-right"></i></span>
              </p>
              <h1 class="mb-0 bread">Tours List</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1">
                <DestinationFilterComponent></DestinationFilterComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
            <div class="row">
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

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default DestinationScreen;