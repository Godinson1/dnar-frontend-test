import React from "react";
import { useSelector } from "react-redux";

import { Loader } from "../../utils";

const AllCoins = () => {
  const details = useSelector((state) => state.details);
  return (
    <div className="content__div all__coins">
      <h3>All Coins</h3>
      <div className="all__coins__container">
        {details.isAllCoinsLoading ? (
          <Loader />
        ) : (
          details.allCoins &&
          details.allCoins.map((data) => {
            const { name, symbol } = data;
            return (
              <div className="coin">
                {name} ({symbol})
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AllCoins;
