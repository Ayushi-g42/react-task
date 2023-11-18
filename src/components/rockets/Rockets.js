import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { SideBar } from "../sidebar/SideBar";
import { RocketCard } from "../rocket-card/RocketCard";
import { selectRocketData } from "../../store/rocket/selector";
import { useSelector, useDispatch } from "react-redux";
import { setRocketData } from "../../store/rocket/slice";
import "../../App.css";

export const Rockets = () => {
  const rocketData = useSelector(selectRocketData);

  const dispatch = useDispatch();

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
      dispatch(setRocketData(result));
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <Container>
      <SideBar />
      <div className="main-section" hidescrollbar>
        <div className="card-wrap">
          {rocketData?.map((rocketItems, index) => {
            return <RocketCard key={index} rocketItems={rocketItems} />;
          })}
        </div>
      </div>
    </Container>
  );
};
