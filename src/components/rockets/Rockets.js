import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { SideBar } from "../sidebar/SideBar";
import { RocketCard } from "../rocket-card/RocketCard";

export const Rockets = () => {
  useEffect(() => {
    getRocketData();
  }, []);

  const getRocketData = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v3/rockets", {
        method: "GET",
      });
      const result = await response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Container>
      <SideBar />
      <div className="main-section">
        <div className="card-wrap">
          <RocketCard />
        </div>
      </div>
    </Container>
  );
};
