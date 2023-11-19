import React from "react";
import { Container } from "./style";

export const LaunchCard = ({ data, title }) => {
  if (!data) return null;
  return (
    <Container>
      <h3>{title}</h3>
      <div className="wrap-inner-box">
        <div className="left">
          <div className="wrap-text">
            <p className="text">MISSION NAME</p>
            <h3 className="title">{data?.mission_name}</h3>
          </div>
          <div className="wrap-text">
            <p className="text">ROCKET</p>
            <h3 className="title">{data.rocket.rocket_name}</h3>
          </div>
          <div className="wrap-text">
            <p className="text">FLIGHT NUMBER</p>
            <h3 className="title">{data.flight_number}</h3>
          </div>
          <div className="wrap-text">
            <p className="text">TIME (UTC)</p>
            <h3 className="title">{data.launch_date_utc}</h3>
          </div>
          <div className="wrap-text">
            <p className="text">LINKS</p>
            <div className="logo-links-wrap">
              <img src="/images/youtube.png" className="logo-links" alt="socal-img" />
              <img src="/images/twitter.png" className="logo-links" alt="socal-img" />
            </div>
          </div>
        </div>
        <div className="right">
          <div className="wrap-text">
            <p className="text">ROCKET LOGO</p>
            <div className="logo-wrap">
              <img src={data.links.mission_patch_small} alt="logo" />
            </div>
          </div>
          <div className="wrap-text">
            <p className="text">LAUNCHPAD</p>
            <h3 className="title">{data.launch_date_unix}</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
