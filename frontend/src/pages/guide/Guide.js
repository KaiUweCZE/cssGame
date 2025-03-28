import React, { useState } from "react";
import "./guide.css";
import GameGuide from "./GameGuide";
import BuildingGuide from "./BuildingGuide";

const Guide = () => {
  const [activeTab, setActiveTab] = useState("game");

  return (
    <main className="guide-container">
      <div className="guide-content">
        <h1 className="guide-title">CSS Game - Guide</h1>

        {/* Navigation Tabs */}
        <div className="tab-container">
          <div className="tab-wrapper">
            <button
              onClick={() => setActiveTab("game")}
              className={`tab-button ${activeTab === "game" ? "active" : ""}`}
            >
              Game mode
            </button>
            <button
              onClick={() => setActiveTab("building")}
              className={`tab-button ${
                activeTab === "building" ? "active" : ""
              }`}
            >
              Building mode
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="content-panel">
          {activeTab === "game" ? <GameGuide /> : <BuildingGuide />}
        </div>
      </div>
    </main>
  );
};
export default Guide;
