import React from "react";
import "./Footer.css";

function Footer() {
  const footer: any = localStorage.getItem("footer");
  //
  console.log(footer);
  return (
    <React.Fragment>
      {footer === "true" && (
        <div className="footer">
          <h3>Home</h3>
          <h3>Schedule a Demo</h3>
          <h3>Contact Us</h3>
          <h3>Terms of Use</h3>
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
        </div>
      )}
      {footer === "false" && (
        <div className="footer">
          <h3>Home</h3>
          <h3>Schedule a Demo</h3>
          <h3>Contact Us</h3>
          <h3>Terms of Use</h3>
          <h3>Terms of Service</h3>
          <h3>Privacy Policy</h3>
        </div>
      )}
    </React.Fragment>
  );
}
export default Footer;
