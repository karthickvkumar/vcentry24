import React, {useState} from "react";

const InboxPage = () => {

  const [showHide, setDisplayMode] = useState(true);

  const ShowImage = () => {
    setDisplayMode(true);
  }

  const HideImage = () => {
    setDisplayMode(false);
  }

  return(
    <div>
      <h1>Here you can see all INBOX Mail</h1>
      <div>
        <button onClick={() => ShowImage() }>Show Image</button>
        <button onClick={() => HideImage()}>Hide Image</button>
      </div>
      {
        showHide &&
        <img src={require("../images/shinchu.jpg")} width="300" alt="banner-image" />
      }
    </div>
  )
}

export default InboxPage;