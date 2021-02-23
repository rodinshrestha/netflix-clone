import React from "react";
import "./Style/Animation.css";

function Animation() {
  return (
    <div className="Animation-container">
      <video autoPlay muted>
        <source src="/images/smoke.mp4" type="video/mp4" />
      </video>
      <h5>
        <span>N</span>
        <span>E</span>
        <span>T</span>
        <span>F</span>
        <span>L</span>
        <span>I</span>
        <span>X</span>
        <span>-</span>
        <span>C</span>
        <span>L</span>
        <span>O</span>
        <span>N</span>
        <span>E</span>
        <span>
          <b>
            <i>BY RODIN</i>
          </b>
        </span>
      </h5>
    </div>
  );
}
export default Animation;
