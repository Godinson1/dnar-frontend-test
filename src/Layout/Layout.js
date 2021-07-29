import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { MdLineWeight, MdEqualizer } from "react-icons/md";
import { IoReorderTwo } from "react-icons/io5";

import { api } from "../Setup";
import { setMarketLeaders, setAllCoins } from "../redux";

import "./styles/layout.scss";

const Layout = ({ children }) => {
  const details = useSelector((state) => state.details);
  const dispatch = useDispatch();

  const getMarketLeaders = async () => {
    const coinsMarkets = await api.get(
      `/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true`
    );
    dispatch(setMarketLeaders(coinsMarkets.data));
  };

  const getCoins = async () => {
    const coins = await api.get("/coins/list?per_page=100&page=1");
    dispatch(setAllCoins(coins.data));
  };

  useEffect(() => {
    getCoins();
    getMarketLeaders();
  }, []);

  return (
    <div className="main__layout">
      <div className="sidebar">
        <div className="toggler">
          <IoReorderTwo size={30} spacing={20} color="#455cb4" />
        </div>
        <div className="sidebar__container">
          <NavLink activeClassName="side__link" to={"/"}>
            <div className="icon">
              <MdLineWeight size={30} />
            </div>
          </NavLink>
          <NavLink activeClassName="side__link" to={"/analytic"}>
            <div className="icon">
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
