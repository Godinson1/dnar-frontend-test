import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdLineWeight, MdEqualizer } from "react-icons/md";
import { IoReorderTwo } from "react-icons/io5";

import { api } from "../Setup";
import {
  setMarketLeaders,
  setAllCoins,
  setLoading,
  setSidebarOpen,
} from "../redux";

import "./styles/layout.scss";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  const getMarketLeaders = async () => {
    const coinsMarkets = await api.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    );
    dispatch(setMarketLeaders(coinsMarkets.data));
  };

  const getCoins = async () => {
    dispatch(setLoading(true));
    const coins = await api.get("/coins/list?per_page=100&page=1");
    dispatch(setAllCoins(coins.data));
    dispatch(setLoading(false));
  };

  useEffect(() => {
    getCoins();
    getMarketLeaders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main__layout">
      <div className="sidebar">
        <div className="toggler" onClick={() => setSidebarOpen(true)}>
          <IoReorderTwo size={30} spacing={20} color="#4b6fe2" />
        </div>
        <div className="sidebar__container">
          <NavLink
            className="navlink"
            exact
            activeClassName="navlink__active"
            to={"/"}
          >
            <div>
              <MdLineWeight size={30} />
            </div>
          </NavLink>
          <br />
          <NavLink
            className="navlink"
            activeClassName="navlink__active"
            to={"/analytic"}
          >
            <div>
              <MdEqualizer size={30} />
            </div>
          </NavLink>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
