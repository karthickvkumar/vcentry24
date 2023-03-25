import React, {useState, useEffect} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

const StudentProfile = () => {

  const [studentForm, updateStudentForm] = useState({
    name : "",
    age : "",
    location : ""
  });

  const [profileList, updateProfileList] = useState([]);

  const [editingProfile, setEditingProfile] = useState(null);

  const [saveStudentForm, UpdateSaveStudentForm] = useState({});

  useEffect(() => {
    loadStudentProfile();
  }, []);

  const handleInput = (event) => {
    updateStudentForm({...studentForm, [event.target.name] : event.target.value});
  }

  const submitStudentProfile = () => {
    // console.log(studentForm);

    const URL = "http://localhost:4000/create-student";
    
    axios.post(URL, studentForm)
      .then((response) => {
        // console.log(response);
        loadStudentProfile();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const loadStudentProfile = () => {
    const URL = "http://localhost:4000/student-list";

    axios.get(URL)
      .then((response) => {
        // console.log(response.data);
        updateProfileList(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const editStudentDetails = (value) => {
    console.log(value);
    setEditingProfile(value.serial_number);
  }

  const saveStudentDetils = (value) => {
    // console.log(saveStudentForm);

    const URL = "http://localhost:4000/edit-student/" + value.serial_number;
    
    var updatedDetails = {...value, ...saveStudentForm };

    console.log(updatedDetails);

    axios.put(URL, updatedDetails)
      .then((response) => {
        // console.log(response.data);
        setEditingProfile(null);
        loadStudentProfile();
        alert("Profile has been updated");
      })
      .catch((error) => {
        console.log(error);
      })
    
  }

  const saveInputField = (event) => {
    UpdateSaveStudentForm({...saveStudentForm, [event.target.name] : event.target.value});
  }

  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      
      <div className="page-content">
      <div>
        <h3>Submuit Student Profile</h3>
        <div className="space">
          <label className="profile-label">Enter your Student Name</label>
          <input className="input" type="text" placeholder="Enter your name" name="name" onChange={handleInput}/>
        </div>
        <div className="space">
          <label className="profile-label">Enter your Student Age</label>
          <input className="input" type="text" placeholder="Enter you age" name="age" onChange={handleInput}/>
        </div>
        <div className="space">
          <label className="profile-label">Enter your Student Location</label>
          <input className="input" type="text" placeholder="Enter you address" name="location" onChange={handleInput}/>
        </div>
        <div>
          <button className="btn btn-primary" onClick={() => submitStudentProfile()}>Submit Student Profile</button>
        </div>

        <div>
          <div className="user-list">
            {
              profileList.map((value, index) => {
                return(
                  <div className="users" key={index}>
                    
                    { editingProfile === value.serial_number ? 
                        <input type="text" className="edit-input" placeholder={value.name} onChange={saveInputField} name="name" /> : 
                        <h5>{value.name}</h5>
                    }

                    { editingProfile === value.serial_number ? 
                        <input type="text" className="edit-input" placeholder={value.age} onChange={saveInputField} name="age"/> : 
                        <h5>{value.age}</h5>
                    }

                    { editingProfile === value.serial_number ? 
                        <input type="text" className="edit-input" placeholder={value.location} onChange={saveInputField} name="location"/> : 
                        <h5>{value.location}</h5>
                    }

                    { editingProfile === value.serial_number ? 
                        <button onClick={() => saveStudentDetils(value)}>Save</button> : 
                        <button onClick={() => {editStudentDetails(value)}}>Edit</button>
                    }

                    
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      </div>

      <FooterComponent></FooterComponent>
    </div>
    
  )
}

export default StudentProfile;