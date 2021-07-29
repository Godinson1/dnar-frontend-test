import React from "react";
import { MdTrendingUp } from "react-icons/md";
import { useSelector } from "react-redux";
import { formatNumber } from "../../utils";
import { Line } from "react-chartjs-2";

import "./styles/analytic.scss";

const Chart = () => {
  const details = useSelector((state) => state.details);

  console.log(details);

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
    labels: labels,
    datasets: [
      {
        label: "$93773.0",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };
  return (
    <div className="chart">
      <h4>
        {formatNumber(29039495)} &nbsp; &nbsp;&nbsp;{" "}
        <span className="chart__price">
          +2.43% &nbsp; <MdTrendingUp size={20} />
        </span>
      </h4>
      <div className="coin__leaders">
        <Line data={data} height={100} />
      </div>
    </div>
  );
};

export default Chart;
