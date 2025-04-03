import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import AnimatedHeader from "../animatedHeader/AnimatedHeader";

const Layout = () => {
  return (
    <div>
      {/* <AnimatedHeader/> */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export { Layout };
