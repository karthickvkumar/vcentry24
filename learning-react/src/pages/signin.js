import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import HeaderComponent from "../components/header";

const SignInPage = () => {

  // const navigate = useNavigate(); 

  // State Variable
  // const [variableName, functionName] = useState(initialData); 
  const [loginForm, loginFunction] = useState({ 
    username : "",
    password : ""
  });

  const validateLogin = () => {
    // navigate("/contact");

    //To print State Variable -- stateVaiable_variableName
    console.log(loginForm);
  }

  const handleInputField = (event) => {
    console.log(event.target.name, event.target.value);
    
    // stateVariable_FunctionName({...stateVaiable_variableName, [initialDataKey] : value});

    loginFunction({...loginForm, [event.target.name] : event.target.value});

  }

  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      <div className="page-content form-align">
        <h1>Sign In</h1>
        <div className="space">
          <label className="label">Enter your Username</label>
          {/* name="initialDataKey" */}
          <input className="input" type="text" placeholder="Enter your username" onChange={handleInputField} name="username" />
        </div>
        <div className="space">
          <label className="label">Enter your Password</label>
          {/* name="initialDataKey" */}
          <input className="input" type="password" placeholder="Enter you password" onChange={handleInputField} name="password"/>
        </div>
        <div>
          <button className="btn" onClick={() => validateLogin()}>Login</button>
        </div>
      </div>
    </div>
  )
}

export default SignInPage;