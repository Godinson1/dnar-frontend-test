import React from "react";

import { MdSearch } from "react-icons/md";
import { IoCalendarOutline, IoChevronDown } from "react-icons/io5";

import Layout from "../../Layout";
import { Chart, InfoCard, Exchange } from "./index";

const Analytics = () => {
  return (
    <Layout>
      <div className="main__view">
        <div className="main__container">
          <div className="content">
            <div className="flex">
              <div className="search__container">
                <div>
                  <MdSearch size={20} color="#455cb4" />
                </div>
                <div>
                  <input placeholder="search" />
                </div>
              </div>
              <div className="datepicker">
                <div>
                  <IoCalendarOutline size={20} color="#7a33ef" />
                </div>
                <div>Nov 2020 - July 2021 </div>
                <div>
                  <IoChevronDown size={20} color="#7a33ef" />
                </div>
              </div>
            </div>
            <Chart />
            <Exchange />
          </div>
          <InfoCard />
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
