import React from "react";
import { useSelector } from "react-redux";

import { formatNumber, Loader } from "../../utils";

const MarketLeaders = ({ details }) => {
  const data = useSelector((state) => state.details);

  return (
    <div className="content__div ">
      <h3>Market Leaders</h3>
      <div className="coin__leaders">
        {data.isLoading ? (
          <Loader />
        ) : (
          details &&
          details.map((data) => {
            const { name, symbol, current_price } = data;
            return (
              <div className="coin__container">
                <div>
                  {name} (<span className="text__upper">{symbol}</span>)
                </div>
                <div>{formatNumber(parseInt(current_price))}</div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MarketLeaders;
