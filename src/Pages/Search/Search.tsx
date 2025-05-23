import React from "react";
import Grid from "@mui/material/Grid2";
import { FilterAltOff, Upload, Download, Share } from "@mui/icons-material";
import { Button, Grid2 } from "@mui/material";

const Search = () => {
  return (
    <Grid2 container spacing={2}>
      <Grid2 size={{ xs: 12, md: 6 }}>
        <div style={{ padding: "15px" }}>
          <h2 style={{ fontSize: "30px" }}>MY INVENTORY</h2>
        </div>
      </Grid2>

      <Grid2
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        size={{ xs: 12, md: 6 }}
        spacing={2}
        zIndex={0}
      >
        <Button
          variant="contained"
          startIcon={<FilterAltOff />}
          sx={{
            backgroundColor: "#C49A6C",
            color: "#fff",

            padding: "1px",
            height: "40px",
            width: "200px",
          }}
        >
          Filter
        </Button>
        <Button
          variant="contained"
          startIcon={<Share />}
          sx={{
            backgroundColor: "#C49A6C",
            color: "#fff",

            padding: "1px",
            height: "40px",
            width: "200px",
          }}
        >
          Share Inventory
        </Button>
        <Button
          variant="contained"
          startIcon={<Upload />}
          sx={{
            backgroundColor: "#C49A6C",
            padding: "1px",
            color: "#fff",

            height: "40px",
            width: "200px",
          }}
        >
          Bulk Upload
        </Button>
        <Button
          variant="contained"
          startIcon={<Download />}
          sx={{
            backgroundColor: "#C49A6C",
            color: "#fff",

            padding: "1px",
            height: "40px",
            width: "200px",
          }}
        >
          Download Inventory
        </Button>
      </Grid2>
    </Grid2>
  );
};
export default Search;
