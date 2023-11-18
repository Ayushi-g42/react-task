import React from "react";
import { Container } from "./style";

export const RocketCard = () => {
  return (
    <Container>
      <p>Falcon 9</p>
      <div className="img-container">
        <img src="https://farm4.staticflickr.com/3955/32915197674_eee74d81bb_b.jpg" />
        <div className="status-card">
          <p className="text">STATUS</p>
          <h3 className="title">Active</h3>
        </div>
      </div>
    </Container>
  );
};
