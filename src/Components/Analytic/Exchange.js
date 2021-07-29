import React from "react";

const Exchange = () => {
  return (
    <div className="exchange">
      <div className="content__div exchange_calc">
        <h3>Exchange</h3>
        <div className="exchange_calc__container">
          <div className="exchange__flex">
            <div>Sell 6700</div>
            <div>USD</div>
          </div>
          <div className="exchange__flex">
            <div>Buy 0.609898</div>
            <div>BTC</div>
          </div>
          <div className="exchange__flex">
            <div>1 BTC = 8343,43 USD</div>
            <div>Exchange</div>
          </div>
        </div>
      </div>
      <div className="content__div alexa">
        <h3>Alexa Rank</h3>
        <div>9440</div>
      </div>
    </div>
  );
};

export default Exchange;
