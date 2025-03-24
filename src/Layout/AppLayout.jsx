import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import WhatsAppIcon from "../Components/WhatsApp";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <WhatsAppIcon />
      <ScrollToTop />
      <div className="bg-white dark:bg-darkbackground">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
