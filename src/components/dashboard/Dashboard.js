import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { SideBar } from "../sidebar/SideBar";
import { LaunchCard } from "../launch-card/LaunchCard";
import {
  setPreviousLaunchData,
  setUpComingLaunchData,
} from "../../store/rocket/slice";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPreviousLaunchData,
  selectUpComingLaunchData,
} from "../../store/rocket/selector";
import { LaunchFacilityCard } from "../launch-facility-card/LaunchFacilityCard";
import { StarLinkCard } from "../star-link-card/StarLinkCard";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const upcomingLaunchData = useSelector(selectUpComingLaunchData)[0];
  const previousLaunchData = useSelector(selectPreviousLaunchData)[0];

  useEffect(() => {
    getUpComingLaunchData();
    getPreviousLaunchData();
  }, []);

  const getUpComingLaunchData = async (rocketId) => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/upcoming`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      dispatch(setUpComingLaunchData(result));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getPreviousLaunchData = async (rocketId) => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/past`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      dispatch(setPreviousLaunchData(result));
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <SideBar />
      <div className="main-section">
        <LaunchCard data={upcomingLaunchData} title="Upcoming launch" />
        <LaunchFacilityCard />
        <LaunchCard data={previousLaunchData} title="Previous launch" />
        <StarLinkCard />
      </div>
    </Container>
  );
};
