import React from "react";

import HeaderComponent from "../components/header";

const SignInPage = () => {
  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      <div className="page-content form-align">
        <h1>Sign In</h1>
        <div className="space">
          <label className="label">Enter your Username</label>
          <input className="input" type="text" placeholder="Enter your username" />
        </div>
        <div className="space">
          <label className="label">Enter your Password</label>
          <input className="input" type="password" placeholder="Enter you password"/>
        </div>
        <div>
          <button className="btn">Login</button>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;