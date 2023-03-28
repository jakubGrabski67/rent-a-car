import React from "react";

import { NavLink } from "react-router-dom";
import navLinks from "../../assets/dummy-data/navLinks";
import "./NavbarLeft.css";

const NavbarLeft = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h2>
          <span>
            <i class="ri-taxi-line"></i>
          </span>{" "}
          RENT ME!
        </h2>
      </div>

      <div className="sidebar__content">
        <div className="menu">
          <ul className="nav__list">
            {navLinks.map((item, index) => (
              <li className="nav__item" key={index}>
                <NavLink
                  to={item.path}
                  className={(navClass) =>
                    navClass.isActive ? "nav__active nav__link" : "nav__link"
                  }
                >
                  <i className={item.icon}></i>

                  {item.display}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="sidebar__bottom">
          <span>
            <i class="ri-logout-circle-r-line"></i> Wyloguj się
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavbarLeft;
