import React, {useState, useEffect} from "react";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import axios from "axios";

const HomePage = () => {

  useEffect(() => {
    getUserProfile();
  }, []);

  const [userProfiles, UpdateUserList] = useState([]);

  const getUserProfile = () => {
    const url = "https://reqres.in/api/users?page=2";

    axios.get(url)
      .then( (response) => {
         const userList = response.data.data;
         UpdateUserList(userList);
       })
      .catch( (error) => { 
        console.log(error);
        alert("Somethings went wrong, pls try later");
      })
  }

  return(
    <div className="main-page">
      <HeaderComponent></HeaderComponent>
      
      <div className="page-content">
        <h1>Welcome to Home Page</h1>
        <button onClick={() => getUserProfile()}>Load User Profile</button>

        <table className="customers">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {
              userProfiles.map((value, index) => {
                return(
                  <tr>
                    <td>{value.id}</td>
                    <td>{value.first_name}</td>
                    <td>{value.last_name}</td>
                    <td>{value.email}</td>
                    <td>
                      <img src={value.avatar} className="profile-pic" />
                    </td>
                  </tr>
                )
              })
            }
            {
              userProfiles.length === 0 && 
              <tr>
                <td colSpan={5}>No Records Found</td>
              </tr>
            }
          </tbody>
        </table>
      
      
      </div>

      

      <FooterComponent></FooterComponent>
    </div>
  )
}

export default HomePage;