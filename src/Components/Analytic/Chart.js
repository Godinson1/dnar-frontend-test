import React from "react";
import { MdTrendingUp } from "react-icons/md";
// import { useSelector } from "react-redux";
import { formatNumber } from "../../utils";
import { Line } from "react-chartjs-2";

import "./styles/analytic.scss";

const Chart = () => {
  // const details = useSelector((state) => state.details);

  const labels = [
    "Nov",
    "Dec",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sep",
    "Oct",
  ];
  const data = {
    labels,
    datasets: [
      {
        label: "$93773.0",
        backgroundColor: "#4b6fe2",
        borderColor: "#4b6fe2",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="chart">
      <h4>
        {formatNumber(29800.65)} &nbsp; &nbsp;&nbsp;{" "}
        <span className="chart__price">
          +2.43% &nbsp; <MdTrendingUp size={20} />
        </span>
      </h4>
      <div className="coin__leaders">
        <Line color="#7a33ef" data={data} height={100} />
      </div>
    </div>
  );
};

export default Chart;
