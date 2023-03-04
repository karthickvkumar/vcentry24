import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FaEyeSlash, FaEye } from "react-icons/fa";
import axios from "axios";

const LoginPage = () => {
  
  const [visibilty, controlVisiblity] = useState(true);
  const [loginForm, extractLoginForm] = useState({
    email : "",
    password : ""
  });
  
  const viewPasssword = () => {
    controlVisiblity(false);
  }

  const hidePassword = () => {
    controlVisiblity(true);
  }

  const handleInput = (event) => {
    extractLoginForm({...loginForm, [event.target.name] : event.target.value});
  }

  const submitLoginForm = () => {
    // console.log(loginForm);
    const url = "https://reqres.in/api/login";

    axios.post(url, loginForm)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      })
  }
  
  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      <div className="page-content">
        <div className="page-align">
        <h1>Login Page</h1>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={handleInput} name="email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={visibilty ? "password" : "text"} placeholder="Password" className="password-field" onChange={handleInput} name="password" />
            
            { visibilty ? <FaEyeSlash size={"34px"} className="icon" onClick={() => viewPasssword()} /> : <FaEye size={"34px"} className="icon" onClick={() => hidePassword()} /> }

            
            
          </Form.Group>
          
          <Button variant="primary" onClick={() => submitLoginForm() }>
            Submit
          </Button>
        </Form>

        </div>
  
      </div>

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default LoginPage;