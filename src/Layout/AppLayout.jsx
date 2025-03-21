import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <div className="bg-white dark:bg-darkbackground">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
