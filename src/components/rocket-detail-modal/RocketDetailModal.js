import React, { useState } from "react";
import { Container } from "./style";
import { RocketDetail } from "../rocket-detail/RocketDetail";
import { RocketImages } from "../rocket-images/RocketImages";
import { useSelector } from "react-redux";
import { selectShowRocketDetail } from "../../store/rocket/selector";

export const RocketDetailModal = () => {
  const [activeTab, setActiveTab] = useState(0);
  const showRocketDetail = useSelector(selectShowRocketDetail);
  const menu = ["Overview", "Photos"];

  return (
    <Container>
      <div className="header">
        <h3 className="heading">{showRocketDetail.rocket_name}</h3>
        {menu.map((item, index) => {
          return (
            <h3
              key={index}
              className={`heading ${activeTab === index ? "active" : "in-active"
                }`}
              onClick={() => {
                setActiveTab(index);
              }}
            >
              {item}
            </h3>
          );
        })}
      </div>

      {activeTab === 0 && <RocketDetail showRocketDetail={showRocketDetail} />}
      {activeTab === 1 && <RocketImages showRocketDetail={showRocketDetail} />}
    </Container>
  );
};
