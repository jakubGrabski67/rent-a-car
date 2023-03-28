import React from "react";
import "../styles/Renting.css";

import carData from "../assets/dummy-data/booking-cars.js";
import CarItem from "../components/UI/CarItem";

const Renting = () => {
  return (
    <div className="bookings">
      <div className="booking__wrapper">
        <h2 className="booking__title">Wybierz pojazd, który chciałbyś wypożyczyć.</h2>

        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select>
              <option value="New">Nowe</option>
              <option value="Popular">Popularne</option>
              <option value="Upcoming">Wkrótce dostępne</option>
            </select>
          </div>

          <div className="filter__widget-01">
            <select>
              <option value="toyota">Toyota</option>
              <option value="bmw">BMW</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>

        <div className="booking__car-list">
          {carData?.map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Renting;
