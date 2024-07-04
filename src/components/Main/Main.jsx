import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Shopify</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            <span>Hello, Gadget Lover.</span>
          </p>
          <p>How can I make your shopping easier?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Compare neckbands vs Airdopes. Both under 2000 Rupees.</p>
            <img src={assets.compass_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Suggest me something for my beard.</p>
            <img src={assets.bulb_icon} alt=""></img>
          </div>
          <div className="card">
            <p>Going on a long tour, need something to charge my laptop.</p>
            <img src={assets.message_icon} alt=""></img>
          </div>
          <div className="card">
            <p>I am throwing a party, suggest cheap and best music system.</p>
            <img src={assets.bulb_icon} alt=""></img>
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter your query here." />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Disclaimer: May display inaccurate info, including about products,
            so double check its response.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
