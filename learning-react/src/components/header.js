import React from "react";

const HeaderComponent = () => {
  
  const username = "karthick";
  
  const address = {
    street: "12, AMC Road",
    area: "T.Nagar",
    city: "Chennai"
  };

  const list = [
    "Mr.Abc", "Mr.Bcd", "Mr.Def"
  ]

  const onLogout = () => {
    alert("You've been successfully Logout!");
  }

  return(
    <div>
      <h2>Welcome back, {username}</h2>
      <button onClick={() => onLogout()}>Logout</button>
      <h3>Location: {address.area}, {address.city}</h3>

      <h3>{list[0]} , {list[2]}</h3>

      <h2 className="heading-text">Header of this page</h2>
    </div>
  )
}

export default HeaderComponent;