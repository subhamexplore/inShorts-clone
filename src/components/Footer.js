import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <span className="name">
        Inshorts clone made by -{" "}
        <a href="https://www.linkedin.com/in/subham-parida-48442a245/" target="__blank">
          Subham Parida
        </a>
      </span>
      <hr style={{ width: "90%" }} />
      <div className="iconContainer">
        <a href="https://www.instagram.com/subhamparida86/" target="__blank">
          <i class="fa-brands fa-instagram fa-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/subham-parida-48442a245/" target="__blank">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://www.facebook.com/profile.php?id=100011542593668" target="__blank">
          <i className="fa-brands fa-facebook fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;