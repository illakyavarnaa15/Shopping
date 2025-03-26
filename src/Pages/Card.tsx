import React from "react";
import Shopping from "./Shopping/Shopping";
import "./Card.css";
const Card = () => {
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          margin: 10,
          justifyContent: "space-around",
        }}
      >
        {Shopping.map(({ id, image, title, description, price }) => {
          return (
            <div key={id} className="box">
              <div
                className="card"
                style={{
                  display: "flex",
                }}
              >
                <div className="image">
                  <img src={image} alt="" />
                </div>
                <div className="desc">
                  <h1>{title}</h1>
                  <p>{description}</p>
                  <span>${price}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Card;
