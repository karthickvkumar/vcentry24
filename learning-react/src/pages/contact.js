import React from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";


const ContactPage = () => {
  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      
      <div className="page-content">
        <h1>Welcome to Contact Page</h1>
      </div>

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default ContactPage;