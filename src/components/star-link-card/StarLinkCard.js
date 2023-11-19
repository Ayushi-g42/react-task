import React from "react";
import { Container } from "./style";
import { RocketImage } from "../../icons/rocket-img";

export const StarLinkCard = () => {
  return (
    <Container>
      <h3>Starlinks</h3>
      <div className="wrap-inner-box">
        <RocketImage />
        <h3 className="title">
          There are currently 3268 active Starlink satellites on the low Earth
          orbit.
        </h3>
      </div>
    </Container>
  );
};
