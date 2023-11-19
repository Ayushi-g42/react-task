import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { SideBar } from "../sidebar/SideBar";
import { RocketCard } from "../rocket-card/RocketCard";
import {
  selectRocketData,
  selectShowRocketDetail,
} from "../../store/rocket/selector";
import { useSelector, useDispatch } from "react-redux";
import { setRocketData, setShowRocketDetail } from "../../store/rocket/slice";
import "../../App.css";
import { Modal } from "../modal/Modal";
import { RocketDetailModal } from "../rocket-detail-modal/RocketDetailModal";

export const Rockets = () => {
  const rocketData = useSelector(selectRocketData);
  const showRocketDetail = useSelector(selectShowRocketDetail);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    getRocketData();
  },[]);

  const getRocketItemDetail = async (rocketId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocketId}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      if (result) {
        setLoading(false);
        dispatch(setShowRocketDetail(result));
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };

  const getRocketData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.spacexdata.com/v3/rockets", {
        method: "GET",
      });
      const result = await response.json();
      if (result) {
        setLoading(false);
        dispatch(setRocketData(result));
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
    }
  };
  return (
    <Container>
      <SideBar />
      {loading ? (
        "Loading..."
      ) : (
        <div className="main-section" hidescrollbar>
          <div className="card-wrap">
            {rocketData?.map((rocketItems, index) => {
              return (
                <RocketCard
                  key={index}
                  rocketItems={rocketItems}
                  onClick={(rocketId) => getRocketItemDetail(rocketId)}
                />
              );
            })}
          </div>
        </div>
      )}

      {showRocketDetail && (
        <Modal
          onClose={() => {
            dispatch(setShowRocketDetail(null));
          }}
        >
          <RocketDetailModal />
        </Modal>
      )}
    </Container>
  );
};
