import React, { useState } from 'react';
import styled from 'styled-components';
export const Tabs = ({ tabs, selectedTab, onClick }) => {
  const [tabData] = useState(tabs);
  return (
    <TabsStyled>
      <div className="tabs" role="tablist" aria-label="Tabs">
        {tabData.map((tab, index) => (
          <div
            key={index}
            className={`tab ${selectedTab.label === tab.label ? 'selected' : ''}`}
            onClick={() => {
              onClick(tab);
            }}
            style={{
              width: `${100 / tabData.length}%`,
            }}
            role="tab"
            aria-selected={selectedTab.label === tab.label}
            tabIndex={selectedTab.label === tab.label ? 0 : -1}
            aria-label={tab.label}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </TabsStyled>
  );
};

const TabsStyled = styled.div`
  .tabs {
    display: flex;
    border: 2px solid rgba(233, 233, 233, 1);
    border-radius: 4px;
    padding: 1px;
  }
  .tab {
    padding: 6px 12px;
    cursor: pointer;
    border: 1px solid transparent;
    border-bottom: none;
    background-color: #f1f1f1;
    transition: background-color 0.3s;
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
  }
  .selected {
    background: rgba(43, 43, 43, 1);
    color: rgba(234, 234, 234, 1);
    border-radius: 4px;
  }
`;
