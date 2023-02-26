import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from 'axios';

const HomePage = () => {

  const getUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then( (response) => {
          console.log(response.data);
       })
      .catch( (error) => { 
        console.log(error);
      })
  }

  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      
      <div className="page-content">
        <h1>Welcome to Home Page</h1>
        <button onClick={() => getUserProfile()}>Load User Profile</button>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomePage;