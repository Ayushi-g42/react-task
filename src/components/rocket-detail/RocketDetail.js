import React from "react";
import { Container } from "./style";

export const RocketDetail = ({ showRocketDetail }) => {
  return (
    <Container>
      <div className="rocket-image">
        <img src={showRocketDetail.flickr_images[1]} />
      </div>
      <div className="rocket-detail">
        <p className="text">Description</p>
        <h3 className="title">{showRocketDetail.description}</h3>
      </div>
    </Container>
  );
};
