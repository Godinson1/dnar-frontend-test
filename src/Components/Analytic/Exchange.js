import React from "react";
import { MdTrendingFlat } from "react-icons/md";

const Exchange = () => {
  return (
    <div className="exchange">
      <div className="content__div__border exchange_calc">
        <h3>Exchange</h3>
        <div className="exchange_calc__container">
          <div className="exchange__flex">
            <div className="exchange__item">
              Sell &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="price">6700</span>
            </div>
            <div>USD</div>
          </div>
          <div className="exchange__flex">
            <div className="exchange__item">
              Buy &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span className="price">0.609898</span>
            </div>
            <div>BTC</div>
          </div>
          <div className="exchange__flex">
            <div className="exchange__item">1 BTC = 8343,43 USD</div>
            <div className="exchange__btn">
              <div>Exchange</div>
              <MdTrendingFlat size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="content__div__border alexa">
        <div className="border__left"></div>
        <h3>Alexa Rank</h3>
        <div>9440</div>
      </div>
    </div>
  );
};

export default Exchange;
