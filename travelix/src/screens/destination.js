import React from "react";

import HeaderComponent from "../components/header";
import TourListComponent from "../components/tour-list";
import FooterComponent from "../components/footer";

const DestinationScreen = () => {
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
                <form action="#" class="search-property-1">
                  <div class="row no-gutters">
                    <div class="col-lg d-flex">
                      <div class="form-group p-4 border-0">
                        <label for="#">Destination</label>
                        <div class="form-field">
                          <div class="icon"><span class="fa fa-search"></span></div>
                          <input type="text" class="form-control" placeholder="Search place" />
                        </div>
                      </div>
                    </div>
                    <div class="col-lg d-flex">
                      <div class="form-group p-4 border-0">
                        <label for="#">Location/Area</label>
                        <div class="form-field">
                          <div class="icon"><span class="fa fa-location-arrow"></span></div>
                          <input type="text" class="form-control" placeholder="Search place" />
                        </div>
                      </div>
                    </div>
                    
                    
                    <div class="col-lg d-flex">
                      <div class="form-group d-flex w-100 border-0">
                        <div class="form-field w-100 align-items-center d-flex">
                          <input type="submit" value="Search" class="align-self-stretch form-control btn btn-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="ftco-section">
        <div class="container">
            <div class="row">
              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>

              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>

              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>

              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>
              <TourListComponent></TourListComponent>
            </div>
          </div>
      </section>

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default DestinationScreen;