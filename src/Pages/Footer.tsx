import React from "react";
import "./Footer.css";
import { Grid2, Typography } from "@mui/material";

function Footer() {
  const footer: any = localStorage.getItem("footer");
  //
  console.log(footer);
  return (
    <>
      <Grid2 container className="footer">
        <Grid2 size={{ xs: 12 }}>
          <Typography variant="h3" sx={{ fontSize: "25px", color: "#ffff" }}>
            @copyrights 2025 WatchOp.All Rights Reserved
          </Typography>
          <Grid2
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: "30px",
            }}
            size={{ xs: 12 }}
          >
            <h3>Home</h3>
            <h3>Schedule a Demo</h3>
            <h3>Contact Us</h3>
            <h3>Terms of Use</h3>
            <h3>Terms of Service</h3>
            <h3>Privacy Policy</h3>
          </Grid2>
        </Grid2>
      </Grid2>
    </>
  );
}
export default Footer;
