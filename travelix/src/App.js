import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import DestinationScreen from "./screens/destination";
import HotelsScreen from "./screens/hotels";
import ConactScreen from "./screens/contact";
import AdminPage from "./screens/admin";

import "./css/flaticon.css";
import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeScreen></HomeScreen>}></Route>
        <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
        <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
        <Route path="hotels" element={<HotelsScreen></HotelsScreen>}></Route>
        <Route path="contact" element={<ConactScreen></ConactScreen>}></Route>
        <Route path="admin" element={<AdminPage></AdminPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;