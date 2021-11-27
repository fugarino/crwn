import React from "react";
import "./homepage.component.scss";

export const HomePage = () => (
  <div>
    <div className="homepage">
      <div className="directory-container">
        <div className="directory-item">
          <div className="content">
            <h1 className="title">ITEM 1</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="directory-item">
          <div className="content">
            <h1 className="title">ITEM 2</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="directory-item">
          <div className="content">
            <h1 className="title">ITEM 3</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="directory-item">
          <div className="content">
            <h1 className="title">WOMENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
        <div className="directory-item">
          <div className="content">
            <h1 className="title">MENS</h1>
            <span className="subtitle">SHOP NOW</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
