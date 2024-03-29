import React, {useState, useEffect} from "react";
import axios from "axios";

const AdminDestinationPage = () => {

  useEffect(() => {
    listDestinations();
  }, []);

  const [destinationForm, updateDestination] = useState({
    destinationName : "",
    destinationLocation : "",
    destinationImage : "",
    destinationCount : ""
  });

  const [destinationList, addDestionation] = useState([]);

  const uploadImage = (event) => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsDataURL(file); 

    reader.onload = () => {
      updateDestination({...destinationForm, destinationImage : reader.result});
    }
  };

  const handleInput = (event) => {
    updateDestination({...destinationForm, [event.target.name] : event.target.value})
  }

  const addDestination = () => {
   const url = "https://travelix-backend.onrender.com/create/destination";

    axios.post(url, destinationForm)
      .then((response) => {
        alert(response.data);
        listDestinations();
      })
      .catch((error) => {
        console.log(error);
        alert("Pls try later");
      })
  }

  const listDestinations = () =>  {
    const url = "https://travelix-backend.onrender.com/list/destinations";

    axios.get(url)
      .then((response) => {
        addDestionation(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const deleteDestination = (value) => {
    var url = "https://travelix-backend.onrender.com/delete/destionation/" + value.id;

    axios.delete(url)
      .then((response) => {
        alert(response.data);
        listDestinations();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return(
    <div>
      <h1>Admin Page</h1>
      <div>
        <h3>Add Destination</h3>
        <div>
          <label>Enter Destination Name</label>
          <input type="text" placeholder="Enter destination name" onChange={handleInput} name="destinationName"/>
        </div>
        <div>
          <label>Enter Destination Location</label>
          <input type="text" placeholder="Enter destination Location" onChange={handleInput} name="destinationLocation"/>
        </div>
        <div>
          <label>Choose Destination Image</label>
          <input type="file" onChange={uploadImage} name="destinationImage"/>
        </div>
        <div>
        <label>Enter Destination Tour Count</label>
          <input type="text" placeholder="Enter destination Tour Count" onChange={handleInput} name="destinationCount"/>
        </div>
        <button onClick={() => addDestination()}>Add Destination</button>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th className="table">Destination Name</th>
            <th className="table">Destination Location</th>
            <th className="table">Destination Image</th>
            <th className="table">Destination Count</th>
            <th className="table">Action</th>
          </tr>
        </thead>
        <tbody>
            { destinationList.map((value, index) => {
              return(
                <tr key={index}>
                  <td className="table">{value.destinationName}</td>
                  <td className="table">{value.destinationLocation}</td>
                  <td className="table">
                    <img src={value.destinationImage} className="sq-image"/>
                  </td>
                  <td className="table">{value.destinationCount}</td>
                  <td className="table">
                    <button onClick={() => deleteDestination(value)}>Delete</button>
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

export default AdminDestinationPage;