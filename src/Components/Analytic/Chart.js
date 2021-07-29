import React from "react";

import { formatNumber } from "../../utils";

const Chart = () => {
  return (
    <div className="content__div ">
      <h3>{formatNumber(29039495)}</h3>
      <div className="coin__leaders">Chart container</div>
    </div>
  );
};

export default Chart;
