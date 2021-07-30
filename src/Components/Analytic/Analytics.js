import React from "react";

import { MdSearch } from "react-icons/md";

import Layout from "../../Layout";
import { Chart, InfoCard, Exchange } from "./index";

const Analytics = () => {
  return (
    <Layout>
      <div className="main__view">
        <div className="search__container">
          <div>
            <MdSearch size={20} color="#455cb4" />
          </div>
          <div>
            <input placeholder="search" />
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <Chart />
            <Exchange />
          </div>
          <InfoCard />
        </div>
        <div className="box__container">
          <div className="border__left"></div>
          hehkhnfczs cksfjckbs,b k knkshfnbsfsf sjfbskfbj,kbfsf fkhfbksbjsf
          jsljfb
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
