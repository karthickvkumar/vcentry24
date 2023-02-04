import React from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return(
    <div className="header">
      <div className="logo">
        <h3>Website Logo</h3>
      </div>
      <div className="site-menu">
        <NavLink to="/" className="link">Home</NavLink>
        <NavLink to="/contact" className="link">Contact</NavLink>
        <NavLink to="/settings" className="link">Settings</NavLink>
      </div>
    </div>
  )
}

export default HeaderComponent;