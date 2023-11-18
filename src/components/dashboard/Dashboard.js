import React, { useState } from "react";
import { Container } from "./style";
import { SideBar } from "../sidebar/SideBar";
import { LaunchCard } from "../launch-card/LaunchCard";

export const Dashboard = () => {
  const [currentTab, setCurrentTab] = useState("dashoard");

  return (
    // <Router>
    <Container>
      <SideBar />
      <div className="main-section">
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
        <LaunchCard />
      </div>
    </Container>
    // </Router>
  );
};
