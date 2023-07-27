import React from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { Navbar } from "../../components";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
