import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

const ContactPage = () => {

  const loadUsers = () => {
    const url = "http://localhost:4000/user-list";

    axios.get(url)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })

  }

  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      
      <div className="page-content">
        <h1>Welcome to Contact Page</h1>

        <button onClick={() => loadUsers()}>List Users</button>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default ContactPage;