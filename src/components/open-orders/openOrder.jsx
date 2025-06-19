import React, { useState } from 'react';
import { OpenOrderContainer } from './openOrder.style';
import styled, { keyframes } from 'styled-components';

// Animation for tab highlight
const tabFadeIn = keyframes`
  from { background-color: #fff; }
  to { background-color: #f1f1f1; }
`;

const AnimatedTab = styled.div`
  transition: background-color 0.3s, color 0.3s;
  animation: ${tabFadeIn} 0.3s;
`;

const AnimatedButton = styled.button`
  transition: background 0.3s, color 0.3s, box-shadow 0.3s;
  &:hover {
    background: #f1f1f1;
    color: #000;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  }
`;

const AnimatedBreakup = styled.div`
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: #f9fafb;
  }
`;

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
    <OpenOrderContainer role="region" aria-label="Open Orders">
      <div className="order-book-wrapper">
        <div className="order-book">
          <div className="order-book-header" role="tablist" aria-label="Order Tabs">
            {orderTabs.map((tab, idx) => (
              <AnimatedTab
                key={tab.label}
                className={`order-book-tab${tab.active ? ' active' : ''}`}
                role="tab"
                aria-selected={tab.active}
                tabIndex={tab.active ? 0 : -1}
                aria-label={tab.label}
                style={{ backgroundColor: tab.active ? '#f1f1f1' : undefined }}
              >
                {tab.label}
              </AnimatedTab>
            ))}
          </div>

          <div className="order-controls">
            <label className="d-flex gap-2 info align-items-center" htmlFor="checkbox">
              <input
                type="checkbox"
                id="checkbox"
                checked={orderControls.hideOtherPairs}
                aria-checked={orderControls.hideOtherPairs}
              />{' '}
              Hide Other Pairs
            </label>
            <AnimatedButton className="App-button" aria-label="Cancel all open orders">
              {orderControls.buttonLabel}
            </AnimatedButton>
          </div>
        </div>
      </div>
      <div className="breakup-container">
        <div className="breakup-header d-flex justify-content-between align-items-start">
          <div className="">
            <div className="breakup-header-title" aria-label="Order Title">
              {breakupHeader.title}
            </div>
            <div className="d-flex limit">
              <div className="info" aria-label="Order Type">
                {breakupHeader.limitInfo}
              </div>
              <div aria-label="Order Date">{breakupHeader.date}</div>
            </div>
          </div>
          <div className="d-flex gap-2">
            <div aria-label="Order Percent">{breakupHeader.percent}</div>
            <AnimatedButton className="App-button" aria-label="Cancel this order">
              {breakupHeader.cancelLabel}
            </AnimatedButton>
          </div>
        </div>
        {breakupDetails.map((item, idx) => (
          <AnimatedBreakup key={item.label} className="breakup d-flex justify-content-between">
            <div aria-label={item.label}>{item.label}</div>
            <div aria-label={item.label + ' Value'}>{item.value}</div>
          </AnimatedBreakup>
        ))}
      </div>
    </OpenOrderContainer>
  );
};

export default OpenOrder;
