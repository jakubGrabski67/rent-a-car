import React from "react";
import Router from "../../routes/Router";
import NavbarLeft from "../NavbarLeft/NavbarLeft";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
  return (
    <div className="layout">
      <Navbar />
      <div className="main__layout">
        <NavbarLeft />

        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  );
};

export default Layout;
