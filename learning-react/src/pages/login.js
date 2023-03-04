import React, {useState} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginPage = () => {
  
  const [visibilty, controlVisiblity] = useState(true);
  
  const viewPasssword = () => {
    controlVisiblity(false);
  }

  const hidePassword = () => {
    controlVisiblity(true);
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
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type={visibilty ? "password" : "text"} placeholder="Password" className="password-field" />
            
            { visibilty ? <FaEyeSlash size={"34px"} className="icon" onClick={() => viewPasssword()} /> : <FaEye size={"34px"} className="icon" onClick={() => hidePassword()} /> }

            
            
          </Form.Group>
          
          <Button variant="primary">
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