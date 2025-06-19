import React, { useState } from 'react';
import { OpenOrderContainer } from './openOrder.style';
const OpenOrder = () => {
  const [orderTabs] = useState([
    { label: 'OPEN ORDERS', active: true },
    { label: 'POSITIONS', active: false },
    { label: 'TRADE HISTORY', active: false },
  ]);
  const [orderControls] = useState({
    hideOtherPairs: true,
    buttonLabel: 'Cancel All',
  });
  const [breakupHeader] = useState({
    title: 'CSK / IPL Winner',
    limitInfo: 'Limit /Buy',
    date: '2025-06-03 14:57:23',
    percent: '0%',
    cancelLabel: 'Cancel',
  });
  const [breakupDetails] = useState([
    { label: 'Filled / Amount', value: '0.00 / 0.01' },
    { label: 'Price', value: '30$' },
  ]);

  return (
    <OpenOrderContainer>
      <div className="order-book-wrapper">
        <div className="order-book">
          <div className="order-book-header">
            {orderTabs.map((tab, idx) => (
              <div key={tab.label} className={`order-book-tab${tab.active ? ' active' : ''}`}>
                {tab.label}
              </div>
            ))}
          </div>

          <div className="order-controls">
            <label className="d-flex gap-2 info align-items-center">
              <input type="checkbox" id="checkbox" checked={orderControls.hideOtherPairs} /> Hide Other Pairs
            </label>
            <button className="App-button">{orderControls.buttonLabel}</button>
          </div>
        </div>
      </div>
      <div className="breakup-container">
        <div className="breakup-header d-flex justify-content-between align-items-start">
          <div className="">
            <div className="breakup-header-title">{breakupHeader.title}</div>
            <div className="d-flex limit">
              <div className="info">{breakupHeader.limitInfo}</div>
              <div>{breakupHeader.date}</div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <div>{breakupHeader.percent}</div>
            <div className="App-button">{breakupHeader.cancelLabel}</div>
          </div>
        </div>
        {breakupDetails.map((item, idx) => (
          <div key={item.label} className="breakup d-flex justify-content-between">
            <div>{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </OpenOrderContainer>
  );
};

export default OpenOrder;
