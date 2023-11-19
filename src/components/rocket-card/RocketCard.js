import React from "react";
import { Container } from "./style";

export const RocketCard = (props) => {
  const { rocketItems, onClick = () => { } } = props;

  return (
    <Container
      onClick={() => {
        onClick(rocketItems.rocket_id);
      }}
    >
      <p>{rocketItems.rocket_name}</p>
      <div className="img-container">
        <img src={rocketItems.flickr_images[1]} alt="rocket-img" />
        <div
          className={`status-card ${rocketItems.active === false && "active"}`}
        >
          <p className="text">STATUS</p>
          <h3 className="title">
            {rocketItems.active === true ? "Active" : "In development"}
          </h3>
        </div>
      </div>
    </Container>
  );
};
