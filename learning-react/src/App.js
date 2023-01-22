import React from "react";
import FooterComponent from "./components/footer";
import HeaderComponent from "./components/header";
import "./css/style.css";

const App = () => {
  return(
    <div>
      <HeaderComponent></HeaderComponent>
      <h1>Welcome to React JS</h1>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App;