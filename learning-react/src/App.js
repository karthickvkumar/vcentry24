import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import SettingsPage from "./pages/settings";
import SignInPage from "./pages/signin";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="settings" element={<SettingsPage></SettingsPage>}></Route>
        <Route path="login" element={<SignInPage></SignInPage>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;