import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { getCoinMarkets, getAllCoinsAndSymbol } from "../redux";
import { Sidebar, SidebarMobile } from "../utils";

import "./styles/layout.scss";

const Layout = ({ children }) => {
  const state = useSelector((state) => state.dashboard);

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
