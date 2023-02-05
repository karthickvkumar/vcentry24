import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import SettingsPage from "./pages/settings";
import SignInPage from "./pages/signin";
import PageNotFound from "./pages/page-not-found";
import MailBoxPage from "./pages/mailbox";

import InboxPage from "./pages/inbox";
import SentPage from "./pages/sent";
import TrashPage from "./pages/trash";

import "./css/style.css";

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage></HomePage>}></Route>
        <Route path="contact" element={<ContactPage></ContactPage>}></Route>
        <Route path="settings" element={<SettingsPage></SettingsPage>}></Route>
        <Route path="login" element={<SignInPage></SignInPage>}></Route>
        <Route path="mail" element={<MailBoxPage></MailBoxPage>}>
          <Route path="inbox" element={<InboxPage></InboxPage>}></Route>
          <Route path="sent" element={<SentPage></SentPage>}></Route>
          <Route path="trash" element={<TrashPage></TrashPage>}></Route>
        </Route>

        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;