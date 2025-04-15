import React, { Fragment } from "react";
import "./Header.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Watchops from "../assets/watchops.png";

function Header() {
  const header: any = localStorage.getItem("header");
  //
  console.log(header);

  return (
    <Fragment>
      {header === "true" && (
        <div className="header">
          <img src={Watchops} />
          <h3>Home</h3>
          <h3>Contact us</h3>
          <h3>
            <AccountCircleIcon
              style={{
                verticalAlign: "middle",
                marginRight: "1px",
                fontSize: "2.5rem",
              }}
            />
            LOGIN
          </h3>
        </div>
      )}
      {header === "false" && (
        <div className="header">
          <img src={Watchops} />
          <h3>SEARCH</h3>
          <h3>ADD INVENTORY</h3>
          <h3>MY INVENTORY</h3>
          <h3>DEALER INVENTORY</h3>
          <h3>INVOICES</h3>
          <h3
            style={{
              color: "#f1ba06",
            }}
          >
            <AccountCircleIcon
              sx={{
                verticalAlign: "middle",
                marginRight: "1px",
                fontSize: "2.5rem",
              }}
            />
            USER
          </h3>
        </div>
      )}
    </Fragment>
  );
}

export default Header;
