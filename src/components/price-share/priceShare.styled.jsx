import styled from 'styled-components';

export const PriceShareContainer = styled.div`
  padding-top: 16px;
  .price-share-list {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .price-share-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    border-radius: 8px;
    font-family: IBM Plex Sans;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    color: rgba(0, 0, 0, 0.7);
  }
  .price-share-item {
    font-family: IBM Plex Sans;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: pink;
    padding: 5px 12px;
  }
  .spread {
    font-weight: 600;
  }
`;
