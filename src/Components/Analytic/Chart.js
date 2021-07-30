import React from "react";
import { Line } from "react-chartjs-2";
import { MdTrendingUp } from "react-icons/md";

// import { useSelector } from "react-redux";
import { formatNumber, Icon } from "../../utils";
import { labels } from "./index";

import "./styles/analytic.scss";

const Chart = () => {
  // const details = useSelector((state) => state.details);

  const data = {
    labels,
    datasets: [
      {
        label: "$93773.0",
        backgroundColor: "#4b6fe2",
        borderColor: "#4b6fe2",
        data: [0, 10, 5, 2, 20, 30, 45, 50],
      },
    ],
  };
  return (
    <div className="chart">
      <div className="flex">
        <div>
          <h4>
            {formatNumber(29800.65)}
            <span className="chart__price">+2.43%</span>
          </h4>
        </div>
        <div className="spark">
          <Icon icon={<MdTrendingUp size={20} />} />
        </div>
      </div>
      <div className="coin__leaders">
        <Line color="#7a33ef" data={data} height={100} />
      </div>
    </div>
  );
};

export default Chart;
