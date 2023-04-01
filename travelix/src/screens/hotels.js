import React from "react";

import HeaderComponent from "../components/header";
import HotelListComponent from "../components/hotel-list";
import HotelFilterComponent from "../components/hotel-filter";
import FooterComponent from "../components/footer";

const HotelsScreen = () => {

  const hotelList = [
    {
      hotelPrice : "150",
      hotelName : "Accordian International",
      hotelCity: "Chennai",
      hotelState: "Tamil Nadu",
      hotelImage: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1"
    },
    {
      hotelPrice : "200",
      hotelName : "TAJ International",
      hotelCity: "Mumbai",
      hotelState: "Maharastra",
      hotelImage: "https://media-cdn.tripadvisor.com/media/photo-s/22/25/ce/ea/kingsford-hotel-manila.jpg"
    },
  ]

  return(
    <div>
      <HeaderComponent></HeaderComponent>

      <section class="hero-wrap hero-wrap-2 js-fullheight" style={{"backgroundImage" : `url(${require("../images/bg_1.jpg")})`}}>
        <div class="overlay js-fullheight"></div>
        <div class="container">
          <div class="row no-gutters slider-text js-fullheight align-items-end justify-content-center">
            <div class="col-md-9 pb-5 text-center">
              <p class="breadcrumbs"><span class="mr-2"><a href="index.html">Home <i
                      class="fa fa-chevron-right"></i></a></span> <span>Hotel <i class="fa fa-chevron-right"></i></span></p>
              <h1 class="mb-0 bread">Hotel</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section ftco-no-pb">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="search-wrap-1">
                <HotelFilterComponent></HotelFilterComponent>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
      <div class="container">
          <div class="row">
            {
              hotelList.map((value, index) => {
                return(
                  <HotelListComponent {...value}></HotelListComponent>
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

export default HotelsScreen;