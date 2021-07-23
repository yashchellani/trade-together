import React from "react";
import "./Card.css";
import stonk from "../resources/assets/stonk.jpeg"; // Tell webpack this JS file uses this image
//import heartOutline from "../assets/heart-outline.png"; // Tell webpack this JS file uses this image
//import heartFill from "../assets/heart-fill.png"; // Tell webpack this JS file uses this image

export default function Card(props) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="profile">
          <span className="letter">{props.name[0]}</span>
        </div>
        <div className="card-title-group">
          <h5 className="card-title">{props.name}</h5>
          <div className="card-price">{props.price}</div>
        </div>
      </div>
      <img className="card-image" src={stonk} alt="Logo" />
      <div className="card-text">{props.description}</div>
    </div>
  );
}