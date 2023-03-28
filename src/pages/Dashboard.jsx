import React from "react";
import "../styles/dashboard.css";
import SingleCard from "../components/reuseable/SingleCard";

import MileChart from "../charts/MileChart";
import CarStatsChart from "../charts/CarStatsChart";
import RecommendCarCard from "../components/UI/RecommendCarCard";

import recommendCarsData from "../assets/dummy-data/recommendCars";

const carObj = {
  title: "Posiadane pojazdy",
  totalNumber: 750,
  icon: "ri-police-car-line",
};

const tripObj = {
  title: "Dzienne trasy",
  totalNumber: 1697,
  icon: "ri-steering-2-line",
};

const clientObj = {
  title: "Klienci rocznie",
  totalNumber: "85k",
  icon: "ri-user-line",
};

const distanceObj = {
  title: "Dzienne kilometry",
  totalNumber: 2167,
  icon: "ri-timer-flash-line",
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="dashboard__wrapper">
        <div className="dashboard__cards">
          <SingleCard item={carObj} />
          <SingleCard item={tripObj} />
          <SingleCard item={clientObj} />
          <SingleCard item={distanceObj} />
        </div>

        <div className="statics">
          <div className="stats">
            <h3 className="stats__title">Statystyki pokonanych kilometrów</h3>
            <MileChart />
          </div>

          <div className="stats">
            <h3 className="stats__title">Statystyki pojazdu</h3>
            <CarStatsChart />
          </div>
        </div>

        <div className="recommend__cars-wrapper">
          {recommendCarsData.map((item) => (
            <RecommendCarCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
