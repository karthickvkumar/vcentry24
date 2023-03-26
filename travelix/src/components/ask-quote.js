import React from "react";

const AskQuoteComponent = () => {
  return(
    <section className="ftco-intro ftco-section ftco-no-pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div className="img" style={{"backgroundImage" : `url(${require("../images/bg_2.jpg")})`}}>
                <div className="overlay"></div>
                <h2>We Are Travelix A Travel Agency</h2>
                <p>We can manage your dream building A small river named Duden flows by their place</p>
                <p className="mb-0"><a href="/" className="btn btn-primary px-4 py-3">Ask For A Quote</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default AskQuoteComponent;