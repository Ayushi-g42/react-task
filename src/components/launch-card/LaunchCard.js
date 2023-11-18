import React from "react";
import { Container } from "./style";

export const LaunchCard = () => {
  return (
    <Container>
      <h3>Upcoming launch</h3>
      <div className="wrap-inner-box">
        <div className="left">
          <div className="wrap-text">
            <p className="text">MISSION NAME</p>
            <h3 className="title">USSF-44</h3>
          </div>
          <div className="wrap-text">
            <p className="text">ROCKET</p>
            <h3 className="title">Falcon Heavy</h3>
          </div>
          <div className="wrap-text">
            <p className="text">FLIGHT NUMBER</p>
            <h3 className="title">188</h3>
          </div>
          <div className="wrap-text">
            <p className="text">TIME (UTC)</p>
            <h3 className="title">Nov 01, 01:41PM</h3>
          </div>
          <div className="wrap-text">
            <p className="text">LINKS</p>
            <h3 className="title">Nov 01, 01:41PM</h3>
          </div>
        </div>
        <div className="right">
          <div className="wrap-text">
            <p className="text">TIME (UTC)</p>
            <h3 className="title">Nov 01, 01:41PM</h3>
          </div>
          <div className="wrap-text">
            <p className="text">LINKS</p>
            <h3 className="title">Nov 01, 01:41PM</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
