import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { SideBar } from "../sidebar/SideBar";
import { RocketCard } from "../rocket-card/RocketCard";
import { selectRocketData } from "../../store/rocket/selector";
import { useSelector, useDispatch } from "react-redux";
import { setRocketData } from "../../store/rocket/slice";
import "../../App.css";
import { Modal } from "../modal/Modal";
import { RocketDetailModal } from "../rocket-detail-modal/RocketDetailModal";

export const Rockets = () => {
  // const [showModal, setShowModal] = useState(false);
  const rocketData = useSelector(selectRocketData);
  const [showRocketDetail, setShowRocketDetail] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    getRocketData();
  }, []);

  const getRocketItemDetail = async (rocketId) => {
    try {
      const response = await fetch(
        `https://api.spacexdata.com/v3/rockets/${rocketId}`,
        {
          method: "GET",
        }
      );
      const result = await response.json();
      setShowRocketDetail(result);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getRocketData = async () => {
    try {
      const response = await fetch("https://api.spacexdata.com/v3/rockets", {
        method: "GET",
      });
      const result = await response.json();
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

      {showRocketDetail && (
        <Modal
          onClose={() => {
            setShowRocketDetail(null);
          }}
        >
          <RocketDetailModal showRocketDetail={showRocketDetail} />
        </Modal>
      )}
    </Container>
  );
};
