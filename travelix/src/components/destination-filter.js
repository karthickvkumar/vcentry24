import React, {useState} from "react";

const DestinationFilterComponent = () => {

  const [destinationFilter, updateDestinatinFilter] = useState({
    destinationName : "",
    location: ""
  })

  const handleForm = (event) => {
    updateDestinatinFilter({...destinationFilter, [event.target.name] : event.target.value});
  }

  const submitDestinationFilter = () => {
    console.log(destinationFilter);
  }

  return(
    <div className="tab-pane show active" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-performance-tab">
    <form action="/" className="search-property-1">
      <div className="row no-gutters">
        <div className="col-lg d-flex">
          <div className="form-group p-4 border-0">
            <label htmlFor="/">Destination</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-search"></span></div>
              <input type="text" className="form-control" placeholder="Search place" onChange={handleForm} name="destinationName" />
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group p-4 border-0">
            <label htmlFor="/">Location/Area</label>
            <div className="form-field">
              <div className="icon"><span className="fa fa-location-arrow"></span></div>
              <input type="text" className="form-control" placeholder="Search place" onChange={handleForm} name="location" />
            </div>
          </div>
        </div>
        <div className="col-lg d-flex">
          <div className="form-group d-flex w-100 border-0">
            <div className="form-field w-100 align-items-center d-flex">
              <input type="button" value="Search"
                className="align-self-stretch form-control btn btn-primary p-0" onClick={() => submitDestinationFilter()} />
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
  )
}

export default DestinationFilterComponent;