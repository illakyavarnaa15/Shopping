import React from "react";
import "./Header.css";

function Header() {
  const header: any = localStorage.getItem("header");
  //
  console.log(header);

  return (
    <React.Fragment>
      <header>
        {header === "true" && (
          <div className="header">
            <h3>Home</h3>
            <h3>Contact us</h3>
            <h3>Login</h3>
          </div>
        )}
        {header === "false" && (
          <div className="header">
            <h3>Search</h3>
            <h3>Wishlist</h3>
            <h3>Cart</h3>
          </div>
        )}
      </header>
    </React.Fragment>
  );
}

export default Header;
