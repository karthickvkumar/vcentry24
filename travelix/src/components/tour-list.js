import React from "react";

const TourListComponent = () => {
  return(
    <div className="col-md-4 m-btm-40">
      <div className="item">
        <div className="project-destination">
          <a href="/" className="img" style={{"backgroundImage": `url(${require("../images/place-1.jpg")})`}}>
            <div className="text">
              <h3>Philippines</h3>
              <span>8 Tours</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default TourListComponent;