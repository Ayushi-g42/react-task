import React from "react";
import { Container } from "./style";
import { useSelector } from "react-redux";
import { selectUpComingLaunchData } from "../../store/rocket/selector";

export const LaunchFacilityCard = () => {
  // if (!data) return null;
  return (
    <Container>
      <h3>Launch facilities</h3>
      <div className="wrap-inner-box first">
        <div className="wrap-details">
          <div className="wrap-text">
            <h3 className="title">Cape Canaveral</h3>
            <p className="text">LC-39A & SLC-40</p>
          </div>
          <div className="wrap-text">
            <p className="text">REGION</p>
            <h3 className="title">Florida</h3>
          </div>
        </div>
        <div className="wrap-details">
          <div className="wrap-text">
            <p className="text">TEMP</p>
            <h3 className="title">20°C</h3>
          </div>
          <div className="wrap-text">
            <p className="text">WEATHER</p>
            <h3 className="title">Clear</h3>
          </div>
          <div className="wrap-text">
            <p className="text">WIND</p>
            <h3 className="title">3 m/s</h3>
          </div>
        </div>
      </div>

      <div className="wrap-inner-box second">
        <div className="wrap-details">
          <div className="wrap-text">
            <h3 className="title">Starbase Boca Chica</h3>
            <p className="text">Starship Launch Facility</p>
          </div>
          <div className="wrap-text">
            <p className="text">REGION</p>
            <h3 className="title">Texas</h3>
          </div>
        </div>
        <div className="wrap-details">
          <div className="wrap-text">
            <p className="text">TEMP</p>
            <h3 className="title">20°C</h3>
          </div>
          <div className="wrap-text">
            <p className="text">WEATHER</p>
            <h3 className="title">Clouds</h3>
          </div>
          <div className="wrap-text">
            <p className="text">WIND</p>
            <h3 className="title">3 m/s</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};
