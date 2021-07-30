import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { MdLineWeight, MdEqualizer } from "react-icons/md";
import { IoReorderTwo } from "react-icons/io5";
import { motion } from "framer-motion";

import { setSidebarOpen, getCoinMarkets, getAllCoinsAndSymbol } from "../redux";
import { Sidebar, SidebarMobile } from "../utils";

import "./styles/layout.scss";

const Layout = ({ children }) => {
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    getCoinMarkets();
    getAllCoinsAndSymbol();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main__layout">
      <div>{state.isSidebarOpen ? <Sidebar /> : <SidebarMobile />}</div>
      {children}
    </div>
  );
};

export default Layout;
