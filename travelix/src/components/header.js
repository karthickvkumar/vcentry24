import React from "react";
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Travelix<span>Travel Agency</span></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/ftco-nav"
          aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu"></span> Menu
        </button>

        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <span className="nav-item">
              <NavLink to="/"  className={({isActive}) => isActive ? "nav-link hand-mouse highlight-text" : "nav-link hand-mouse"}>Home</NavLink>
            </span>
            <span className="nav-item">
              <NavLink to="/about" className={({isActive}) => isActive ? "nav-link hand-mouse highlight-text" : "nav-link hand-mouse" }>About</NavLink>
            </span>
            <span className="nav-item">
              <NavLink to="/destination" className={({isActive}) => isActive ? "nav-link hand-mouse highlight-text" : "nav-link hand-mouse"}>Destination</NavLink>
            </span>
            <span  className="nav-item">
              <NavLink to="/hotels" className={({isActive}) => isActive ? "nav-link hand-mouse highlight-text" : "nav-link hand-mouse" }>Hotels</NavLink>
            </span>
            <span className="nav-item">
              <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link hand-mouse highlight-text" : "nav-link hand-mouse" }>Contact</NavLink>
            </span>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default HeaderComponent;