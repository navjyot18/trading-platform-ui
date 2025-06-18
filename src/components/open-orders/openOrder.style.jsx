import styled from 'styled-components';
export const OpenOrderContainer = styled.div`
  .order-book {
    background: white;
  }

  .order-book-header {
    display: flex;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    gap: 12px;
    padding: 0px 16px;
  }

  .order-book-tab {
    padding: 8px 0;
    font-size: 12px;
    color: #666;
    cursor: pointer;
  }

  .order-book-tab.active {
    color: #333;
    font-weight: 600;
  }
  .order-controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding: 8px 16px;
  }

  #checkbox {
    width: 20px;
    height: 20px;
    border: 2px solid rgb(136, 128, 128); /* Thick border */
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    outline: none;
  }
  .info {
    color: rgba(133, 133, 133, 1);
    font-family: IBM Plex Sans;
    font-weight: 500;
    font-size: 12px;
  }
  .breakup-container {
    padding: 12px 16px 24px 16px;
    background: #fff;
    border-bottom: 1px solid #eee;
  }
  .breakup {
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    color: rgba(59, 59, 59, 1);
  }
  .breakup-header {
    margin-bottom: 20px;
  }
  .breakup-header-title {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: left;
  }
  .limit {
    font-family: IBM Plex Sans;
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
  }
  .limit .info {
    color: rgba(86, 171, 104, 1);
    font-weight: 400;
    font-size: 10px;
    line-height: 16px;
    margin-right: 2px;
  }
`;
