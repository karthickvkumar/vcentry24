import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";

const SettingsPage = () => {

  const [registerForm, updateRegister] = useState({
    name : "",
    email_id : "",
    password: "",
    re_password: "",
    gender: "",
    date_of_birth: "",
    hobbies: [],
    education: "",
    location: "",
    address: ""
  });

  const handleFormField = (event) => {
    if(event.target.name === "hobbies"){
      if(event.target.checked){
        registerForm.hobbies.push(event.target.value);
      }
      else{
        const index = registerForm.hobbies.indexOf(event.target.value);
        registerForm.hobbies.splice(index, 1);
      }
      updateRegister({...registerForm, hobbies : registerForm.hobbies});
    }
    else{
      updateRegister({...registerForm, [event.target.name] : event.target.value});
    }
  }

  const submitRegisterForm = () => {
    console.log(registerForm);
  }

  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      <div className="page-content">
        <h3>Account Creation Form</h3>
        <div className="account-form">
          <div className="section">
            <label className="form-lable">Enter your Name :</label>
            <input className="form-input" type="text" placeholder="Enter your name" onChange={handleFormField} name="name"/>
          </div>
          <div className="section">
            <label className="form-lable">Enter your Email ID :</label>
            <input className="form-input" type="email" placeholder="Enter your email" onChange={handleFormField} name="email_id"/>
          </div>
          <div className="section">
            <label className="form-lable">Enter your Password :</label>
            <input className="form-input" type="password" placeholder="Enter your password" onChange={handleFormField} name="password" />
          </div>
          <div className="section">
            <label className="form-lable">Re-Enter your Password :</label>
            <input className="form-input" type="password" placeholder="Re-Enter your password" onChange={handleFormField} name="re_password"/>
          </div>
          <div className="section">
            <label className="form-lable">Select your Gender :</label>
            <input type="radio" onChange={handleFormField} name="gender" value="Male"/><label className="form-input">Male</label>

            <input type="radio" onChange={handleFormField} name="gender" value="Female"/><label className="form-input">Female</label>

            <input type="radio" onChange={handleFormField} name="gender" value="Others"/><label className="form-input">Others</label>
          </div>
          <div className="section">
            <label className="form-lable">Select your DOB :</label>
            <input className="form-input" type="date" onChange={handleFormField} name="date_of_birth"/>
          </div>
          <div className="section">
            <label className="form-lable">Select your Hobbies :</label>
            <input type="checkbox" onChange={handleFormField} name="hobbies" value="Cricket" /><label className="form-input">Cricket</label>

            <input type="checkbox" onChange={handleFormField} name="hobbies" value="Football"/><label className="form-input">Football</label>

            <input type="checkbox" onChange={handleFormField} name="hobbies" value="Hockey"/><label className="form-input">Hockey</label>

            <input type="checkbox" onChange={handleFormField} name="hobbies" value="BaseBall"/><label className="form-input">BaseBall</label>

            <input type="checkbox" onChange={handleFormField} name="hobbies" value="Chess"/><label className="form-input">Chess</label>

            <input type="checkbox" onChange={handleFormField} name="hobbies" value="Caramboard"/><label className="form-input">Caramboard</label>
          </div>
          <div className="section">
            <label className="form-lable">Select your Higher Education</label>
            <select className="form-input" onChange={handleFormField} name="education" defaultValue={""}>
              <option value="" disabled>Please choose any value</option>
              <option>SSLC</option>
              <option>HSC</option>
              <option>Under Graduagte</option>
              <option>Post Gradugate</option>
              <option>Master Degree</option>
              <option>M.Phil</option>
            </select>
          </div>
          <div className="section">
            <label className="form-lable">Select your Location</label>
            <select className="form-input" onChange={handleFormField} name="location" defaultValue={""}>
              <option value="" disabled>Please choose a location</option>
              <option>Chennai</option>
              <option>Mumbai</option>
              <option>Jaipur</option>
              <option>Cochin</option>
              <option>Coimbatore</option>
              <option>Trichy</option>
            </select>
          </div>
          <div className="section textarea-center">
            <label className="form-lable">Enter your Address :</label>
            <textarea className="form-input" placeholder="Enter your address" onChange={handleFormField} name="address"></textarea>
          </div>
          <div>
            <button className="form-input" onClick={() => submitRegisterForm()}>Submit Form</button>
          </div>
        </div>
      </div>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default SettingsPage;