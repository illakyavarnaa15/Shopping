import React from "react";
import Shopping from "../Shopping/Shopping";
import "./Card.css";
import Grid from "@mui/material/Grid2";
import Search from "../Search/Search";
import { Box, Switch } from "@mui/material";
import { useState } from "react";
import { InfoOutlined, Label } from "@mui/icons-material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Card = () => {
  return (
    <Grid sx={{ display: "flex", alignItems: "center" }} container spacing={2}>
      <Grid size={{ xs: 12 }}>
        <Search />
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={3}>
          {Shopping.map((data, id) => {
            return (
              <Grid size={{ xs: 12, sm: 8, md: 6 }} key={id} className="box">
                <Grid
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                >
                  <Grid
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                    className="image"
                  >
                    <img
                      src={data.image}
                      alt=""
                      style={{ width: "200px", height: "250px" }}
                    />

                    <Grid className="desc">
                      <h1 style={{ fontSize: "40px" }}>{data.title}</h1>
                      <div style={{ fontSize: "25px", textAlign: "justify" }}>
                        <p>Brand:{data.Brand}</p>
                        <p>Ref:{data.Ref}</p>
                        <p>DailColor:{data.DailColor}</p>
                        <p>Box:{data.Box}</p>
                        <p>Warranty:{data.Warranty}</p>
                        <p>WarrantyYear:{data.WarrantyYear}</p>
                        <p>Condition:{data.Condition}</p>
                        <p>Price:{data.Price}</p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid container>
                    <Grid>
                      <InfoOutlinedIcon />
                    </Grid>
                    <Grid
                      size={{ xs: 12, sm: 4, md: 4 }}
                      sx={{
                        display: "flex",
                        alignSelf: "flex-end",
                        width: "10px",
                      }}
                    >
                      <Switch
                        sx={{
                          width: 42,
                          height: 26,
                          padding: 0,
                          "& .MuiSwitch-switchBase": {
                            padding: 0,
                            transitionDuration: "300ms",
                            "&.Mui-checked": {
                              transform: "translateX(16px)",
                              color: "#fff",
                              "& + .MuiSwitch-track": {
                                opacity: 1,
                                border: 0,
                              },
                              "&.Mui-disabled + .MuiSwitch-track": {
                                opacity: 0.5,
                              },
                            },
                            "&.Mui-focusVisible .MuiSwitch-thumb": {
                              color: "#33cf4d",
                              border: "6px solid #fff",
                            },
                            "&.Mui-disabled + .MuiSwitch-track": {
                              opacity: 0.7,
                            },
                          },
                          "& .MuiSwitch-thumb": {
                            boxSizing: "border-box",
                            width: 22,
                            height: 22,
                          },
                          "& .MuiSwitch-track": {
                            borderRadius: 26 / 2,
                            backgroundColor: "#E9E9EA",
                            opacity: 1,
                          },
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Card;
