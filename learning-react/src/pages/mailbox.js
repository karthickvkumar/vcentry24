import React from "react";
import HeaderComponent from "../components/header";
import {NavLink, Outlet} from "react-router-dom";

const MailBoxPage = () => {
  return(
    <div className="main-page">
    <HeaderComponent></HeaderComponent>
    
    <div className="page-content">
      <h1>Welcome to Mail Box</h1>
      <div className="wrapper">
        <div className="sidebar">
          <NavLink to="/mail/inbox">Inbox</NavLink>
          <br/>
          <NavLink to="/mail/sent">Sent</NavLink>
          <br/>
          <NavLink to="/mail/trash">Trash</NavLink>
        </div>
        <div className="sub-page">
          <Outlet></Outlet>
        </div>
      </div>
    </div>

  </div>
  )
}

export default MailBoxPage;