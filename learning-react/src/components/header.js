import React from "react";

const HeaderComponent = () => {
  let username = "karthick";
  let address= {
    street: "12, AMC Road",
    area: "T.Nagar",
    city: "Chennai"
  };

  const onLogout = () => {
    alert("You've been successfully Logout!");
  }

  return(
    <div>
      <h2>Welcome to back, {username}</h2>
      <button onClick={() => onLogout()}>Logout</button>
      <h3>Location: {address.area}, {address.city}</h3>
      <h2 className="heading-text">Header of this page</h2>
    </div>
  )
}

export default HeaderComponent;