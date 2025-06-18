import React from 'react';
import { OpenOrderContainer } from './openOrder.style';
const OpenOrder = () => {
  return (
    <OpenOrderContainer>
      <div className="order-book-wrapper">
        <div class="order-book">
          <div class="order-book-header">
            <div class="order-book-tab active">OPEN ORDERS</div>
            <div class="order-book-tab">POSITIONS</div>
            <div class="order-book-tab">TRADE HISTORY</div>
          </div>

          <div class="order-controls">
            <label className="d-flex gap-2 info align-items-center">
              <input type="checkbox" id="checkbox" checked /> Hide Other Pairs
            </label>
            <button class="App-button">Cancel All</button>
          </div>
        </div>
      </div>
      <div className="breakup-container">
        <div className="breakup-header d-flex justify-content-between align-items-start">
          <div className="">
            <div className="breakup-header-title">CSK / IPL Winner</div>
            <div className="d-flex limit">
              <div className="info">Limit /Buy</div>
              <div>2025-06-03 14:57:23</div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <div>0%</div>
            <div className="App-button">Cancel</div>
          </div>
        </div>
        <div className="breakup d-flex justify-content-between">
          <div>Filled / Amount</div>
          <div>0.00 / 0.01</div>
        </div>
        <div className="breakup d-flex justify-content-between">
          <div>Price</div>
          <div>30$</div>
        </div>
      </div>
    </OpenOrderContainer>
  );
};

export default OpenOrder;
