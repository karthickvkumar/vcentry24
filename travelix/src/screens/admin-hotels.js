import React, {useState, useEffect} from "react";
import axios from "axios";

const AdmimHotelsPage = () => {

  useEffect(() => {
    listHotels();
  }, [])

  const [hotelForm, updateHotel] = useState({
    hotelName : "",
    hotelImage : "",
    hotelLocation: "",
    hotelPrice : ""
  });

  const [hotelList, addHotels] = useState([]);

  const handleInput = (event) => {
    updateHotel({...hotelForm, [event.target.name] : event.target.value});
  }

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file); 

    reader.onload = () => {
      updateHotel({...hotelForm, hotelImage : reader.result});
    }
  };

  const addHotel = () => {
    const url = "http://localhost:4000/create/hotel";

    axios.post(url, hotelForm)
      .then((response) => {
        alert(response.data);
        listHotels();
      })
      .catch((error) => {
        console.log(error);
        alert("Pls try later");
      })
  }

  const listHotels = () =>  {
    const url = "http://localhost:4000/list/hotels";

    axios.get(url)
      .then((response) => {
        addHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteHotel = (value) => {
    var url = "http://localhost:4000/delete/hotel/" + value.id;

    axios.delete(url)
      .then((response) => {
        alert(response.data);
        listHotels();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <h3>Add Hotel Details</h3>
      <div>
          <label>Enter Hotel Name</label>
          <input type="text" placeholder="Enter Hotel Name" onChange={handleInput} name="hotelName"/>
        </div>
        <div>
          <label>Choose Hotel Image</label>
          <input type="file" onChange={uploadImage} name="hotelImage"/>
        </div>
        <div>
        <label>Enter Hotel Location</label>
          <input type="text" placeholder="Enter Hotel Location" onChange={handleInput} name="hotelLocation"/>
        </div>
        <div>
        <label>Enter Hotel Price</label>
          <input type="text" placeholder="Enter Hotel Price" onChange={handleInput} name="hotelPrice"/>
        </div>
        <button onClick={() => addHotel()}>Add Hotel</button>
        <table className="table">
        <thead>
          <tr>
            <th className="table">Hotel Name</th>
            <th className="table">Hotel Image</th>
            <th className="table">Hotel Location</th>
            <th className="table">Hotel Price</th>
            <th className="table">Action</th>
          </tr>
        </thead>
        <tbody>
            { hotelList.map((value, index) => {
              return(
                <tr key={index}>
                  <td className="table">{value.hotelName}</td>
                  <td className="table">
                    <img src={value.hotelImage} className="sq-image"/>
                  </td>
                  <td className="table">{value.hotelLocation}</td>
                  <td className="table">Rs.{value.hotelPrice}</td>
                  <td className="table">
                    <button onClick={() => deleteHotel(value)}>Delete</button>
                  </td>
                </tr>
              )
            })
              
            }
        </tbody>
      </table>
    </div>
  )
}

export default AdmimHotelsPage;