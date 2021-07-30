import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MdLineWeight, MdEqualizer } from "react-icons/md";
import { IoReorderTwo } from "react-icons/io5";
import { motion } from "framer-motion";

import { setSidebarOpen } from "../../../redux";

import "./styles.scss";

const SidebarMobile = () => {
  const state = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="sidebar">
        <div
          className="toggler"
          onClick={() => dispatch(setSidebarOpen(!state.isSidebarOpen))}
        >
          <IoReorderTwo size={30} spacing={20} color="#4b6fe2" />
        </div>
        <motion.div
          className="sidebar__container"
          initial={{ x: 0 }}
          transition={{ duration: 0.5 }}
          animate={{
            x: 0,
          }}
        >
          <NavLink
            className="navlink"
            exact
            activeClassName="navlink__active"
            to={"/"}
          >
            <div className="flex">
              <MdLineWeight size={30} />
            </div>
          </NavLink>
          <br />
          <NavLink
            className="navlink"
            activeClassName="navlink__active"
            to={"/analytic"}
          >
            <div className="flex">
              <MdEqualizer size={30} />
            </div>
          </NavLink>
        </motion.div>
      </div>
    </div>
  );
};

export default SidebarMobile;
