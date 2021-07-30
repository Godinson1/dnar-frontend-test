import React from "react";

import { MdSearch } from "react-icons/md";
import { IoCalendarOutline, IoChevronDown } from "react-icons/io5";

import Layout from "../../Layout";
import { Icon } from "../../utils";
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
                <Icon icon={<IoCalendarOutline size={20} color="#7a33ef" />} />
                <div>Nov 2020 - July 2021 </div>
                <Icon icon={<IoChevronDown size={20} color="#7a33ef" />} />
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
