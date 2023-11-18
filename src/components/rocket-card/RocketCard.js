import React from "react";
import { Container } from "./style";

export const RocketCard = (props) => {
  const { rocketItems } = props;
  console.log("rocketItems--", rocketItems);
  return (
    <Container>
      <p>{rocketItems.rocket_name}</p>
      <div className="img-container">
        <img src={rocketItems.flickr_images[1]} />
        <div
          className={`status-card ${rocketItems.active == false && "active"}`}
        >
          <p className="text">STATUS</p>
          <h3 className="title">
            {rocketItems.active == true ? "Active" : "In development"}
          </h3>
        </div>
      </div>
    </Container>
  );
};
