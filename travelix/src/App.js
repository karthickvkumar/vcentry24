import React, {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomeScreen from "./screens/home";
import AboutScreen from "./screens/about";
import DestinationScreen from "./screens/destination";
import HotelsScreen from "./screens/hotels";
import ConactScreen from "./screens/contact";
import AdminDestinationPage from "./screens/admin-destination";
import AdmimHotelsPage from "./screens/admin-hotels";

import SharingContext from "./context/data-context";

import "./css/flaticon.css";
import "./css/style.css";

const App = () => {

  const [data, updateData] = useState([]);

  const dataExchange = (infomation) => {
    updateData(infomation);
  }

  return(
    <SharingContext.Provider value={{data, dataExchange}}>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<HomeScreen></HomeScreen>}></Route>
          <Route path="about" element={<AboutScreen></AboutScreen>}></Route>
          <Route path="destination" element={<DestinationScreen></DestinationScreen>}></Route>
          <Route path="hotels" element={<HotelsScreen></HotelsScreen>}></Route>
          <Route path="contact" element={<ConactScreen></ConactScreen>}></Route>
          <Route path="admin/destination" element={<AdminDestinationPage></AdminDestinationPage>}></Route>
          <Route path="admin/hotels" element={<AdmimHotelsPage></AdmimHotelsPage>}></Route>
        </Routes>
      </BrowserRouter>
    </SharingContext.Provider>
  )
}

export default App;