import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { MdSearch } from "react-icons/md";

import Layout from "../../Layout";
import { sortTitle } from "../../utils";
import { Info, AllCoins, MarketLeaders } from "../../Components";

const Home = () => {
  const details = useSelector((state) => state.details);

  const [marketLeaders, setMarketLeaders] = useState([]);
  const [filterData, setFilterData] = useState(marketLeaders);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (details && details.marketLeaders) {
      const titleData = sortTitle(details.marketLeaders, search);
      setFilterData(titleData);
      setMarketLeaders(titleData);
    }
  }, [search, details]);

  useEffect(() => {
    setFilterData(marketLeaders);
  }, [marketLeaders]);

  useEffect(() => {
    if (details && details.marketLeaders)
      setMarketLeaders(details.marketLeaders);
  }, [details]);

  return (
    <Layout>
      <div className="main__view">
        <div className="search__container">
          <div>
            <MdSearch size={20} color="#4b6fe2" />
          </div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              name="search"
            />
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <MarketLeaders details={filterData || []} />
            <AllCoins />
          </div>
          <Info />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
