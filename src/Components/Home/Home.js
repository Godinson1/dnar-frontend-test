import React from "react";

import { MdSearch } from "react-icons/md";

import Layout from "../../Layout";
import { Info, AllCoins, MarketLeaders } from "../../Components";

const Home = () => {
  return (
    <Layout>
      <div className="main__view">
        <div className="search__container">
          <div>
            <MdSearch size={20} color="#4b6fe2" />
          </div>
          <div>
            <input placeholder="search" />
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <MarketLeaders />
            <AllCoins />
          </div>
          <Info />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
