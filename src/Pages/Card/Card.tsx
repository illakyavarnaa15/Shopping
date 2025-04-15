import React from "react";
import Shopping from "../Shopping/Shopping";
import "./Card.css";
import Grid from "@mui/material/Grid2";
import Search from "../Search/Search";
const Card = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Search />
        </Grid>
        {Shopping.map((data, id) => {
          return (
            <Grid size={{ xs: 12, md: 6 }} key={id} className="box">
              <Grid
                style={{
                  display: "flex",
                }}
              >
                <Grid className="image">
                  <img src={data.image} alt="" style={{ width: "200px" }} />
                </Grid>
                <Grid className="desc">
                  <h1 style={{ fontSize: "20px" }}>{data.title}</h1>
                  <p>Brand:{data.Brand}</p>
                  <p>Ref:{data.Ref}</p>
                  <p>DailColor:{data.DailColor}</p>
                  <p>Box:{data.Box}</p>
                  <p>Warranty:{data.Warranty}</p>
                  <p>WarrantyYear:{data.WarrantyYear}</p>
                  <p>Condition:{data.Condition}</p>
                  <p>Price:{data.Price}</p>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Card;
