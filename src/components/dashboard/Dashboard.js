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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getUpComingLaunchData();
    getPreviousLaunchData();
  },[]);

  const getUpComingLaunchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/upcoming`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      if (result) {
        setLoading(false);
        dispatch(setUpComingLaunchData(result));
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const getPreviousLaunchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.spacexdata.com/v3/launches/past`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      if (result) {
        setLoading(false);
        dispatch(setPreviousLaunchData(result));
      }
    } catch (error) {
      setLoading(true);
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <SideBar />
      {loading ? (
        <div className="bg-image img-wrap">Loading...</div>
      ) : (
        <div className="main-section bg-image">
          <LaunchCard data={upcomingLaunchData} title="Upcoming launch" />
          <LaunchFacilityCard />
          <LaunchCard data={previousLaunchData} title="Previous launch" />
          <StarLinkCard />
        </div>
      )}
    </Container>
  );
};
