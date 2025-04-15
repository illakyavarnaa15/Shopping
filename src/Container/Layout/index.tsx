import React from "react";
import Header from "../../Pages/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Footer";
import { Box, Grid2, Toolbar } from "@mui/material";
import "./index.css";

const Layout = () => {
  return (
    <div className="holder">
      <Box
        sx={{
          position: "fixed",
          zIndex: 1,
          marginBottom: "5rem !important",
          height: "60px",
        }}
      >
        <Toolbar />
        <Header />
      </Box>
      <div style={{ overflowY: "auto", width: "100%", height: "100%" }}>
        <div className="bodycontainer">
          <Outlet />
        </div>
      </div>
      <Box height="60px">
        <Footer />
      </Box>
    </div>
  );
};

export default Layout;
