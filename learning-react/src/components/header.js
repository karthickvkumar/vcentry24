import React from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return(
    <div className="header">
      <div className="logo">
        <img src={require("../images/logo.png")} className="logo" />
      </div>
      <div className="site-menu">
        <NavLink to="/" className={({isActive}) =>  isActive ? "link active-link" : "link"}>Home</NavLink>

        <NavLink to="/contact" className={({isActive}) =>  isActive ? "link active-link" : "link"}>Contact</NavLink>

        <NavLink to="/settings" className={({isActive}) =>  isActive ? "link active-link" : "link"}>Settings</NavLink>

        <NavLink to="/login" className={({isActive}) =>  isActive ? "link active-link" : "link"}>Sign In</NavLink>

        <NavLink to="/mail" className={({isActive}) =>  isActive ? "link active-link" : "link"}>MailBox</NavLink>
      </div>
    </div>
  )
}

export default HeaderComponent;


