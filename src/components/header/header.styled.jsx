import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  .nav-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: white;
    border-bottom: 1px solid #ccc;
    transition: background 0.3s, box-shadow 0.3s;
  }

  .nav-icon {
    width: 24px;
    height: 24px;
    background: #333;
    clip-path: polygon(0 0, 100% 50%, 0 100%);
    transition: background 0.3s;
  }

  .nav-right {
    display: flex;
    gap: 16px;
  }

  .star-icon,
  .bell-icon {
    width: 24px;
    height: 24px;
    border: 2px solid #333;
    border-radius: 4px;
    transition: border-color 0.3s, background 0.3s;
    &:hover,
    &:focus {
      border-color: #ff9800;
      background: #fffde7;
    }
  }
  .stock-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    padding: 16px;
    background: white;
    transition: background 0.3s, box-shadow 0.3s;
  }

  .team-logo {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #ffeb3b, #ff9800);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    color: #333;
    transition: background 0.3s, box-shadow 0.3s;
    &:hover,
    &:focus {
      box-shadow: 0 2px 8px rgba(255, 235, 59, 0.2);
    }
  }

  .stock-info .title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 4px;
  }

  .volume {
    font-size: 12px;
    color: #666;
    text-align: left;
    font-weight: 500;
    line-height: 16px;
  }

  .price-change {
    text-align: right;
  }

  .current-price {
    font-size: 24px;
    font-weight: bold;
  }

  .change {
    font-size: 14px;
    color: #4caf50;
    font-weight: 500;
  }

  .chart-icon {
    width: 24px;
    height: 24px;
    background: #333;
    margin-left: 8px;
  }
`;

export const Title = styled.h1`
  color: #0055aa;
`;
