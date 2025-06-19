import { useState } from 'react';
import { PriceShareContainer } from './priceShare.styled';
const PriceShare = () => {
  const [priceSharesData] = useState([
    {
      price: '38¢',
      shares: '14,984.00',
      background: 'rgba(169, 0, 34, 0.1)',
      width: '100%',
    },
    {
      price: '37¢',
      shares: '14,984.00',
      background: 'rgba(169, 0, 34, 0.1)',
      width: '70%',
    },
    {
      price: '36¢',
      shares: '14,984.00',
      background: 'rgba(169, 0, 34, 0.1)',
      width: '60%',
    },
    {
      price: '35.6¢',
      shares: '14,984.00',
      background: 'rgba(169, 0, 34, 0.1)',
      width: '50%',
    },
    {
      price: '35¢',
      shares: '14,984.00',
      background: 'rgba(169, 0, 34, 0.1)',
      width: '40%',
    },
    {
      price: '34.5¢',
      shares: '(Spread 1%)',
      isSpread: true,
      background: 'rgba(169, 0, 34, 0.1)',
    },
    {
      price: '34¢',
      shares: '14,984.00',
      background: 'rgba(6, 169, 0, 0.1)',
      width: '60%',
    },
    {
      price: '33.5¢',
      shares: '14,984.00',
      background: 'rgba(6, 169, 0, 0.1)',
      width: '70%',
    },
    {
      price: '33.4¢',
      shares: '14,984.00',
      background: 'rgba(6, 169, 0, 0.1)',
      width: '70%',
    },
    {
      price: '32¢',
      shares: '14,984.00',
      background: 'rgba(6, 169, 0, 0.1)',
      width: '80%',
    },
    {
      price: '30¢',
      shares: '14,984.00',
      background: 'rgba(6, 169, 0, 0.1)',
      width: '100%',
    },
  ]);
  const getBackgroundStyle = (item) => {
    return {
      background: `linear-gradient(to right, ${item.background} ${item.width}, transparent ${0}%)`,
    };
  };

  const columns = [
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Shares (CSK)',
      dataIndex: 'shares',
      key: 'shares',
    },
  ];

  return (
    <PriceShareContainer role="region" aria-label="Price and Share List">
      <div className="price-share-container">
        <div className="price-share-list">
          <div className="d-flex price-share-header">
            {columns.map((column, index) => (
              <div key={index} className={`price-share-header-key ${column.key}`}>
                {column.title}
              </div>
            ))}
          </div>
          {priceSharesData.map((item, index) => (
            <div key={index} className={`price-share-item`} style={getBackgroundStyle(item)}>
              <span className={`price ${item.isSpread ? 'spread' : ''}`}>{item.price}</span>
              <span
                className="shares"
                style={{
                  fontSize: item.isSpread ? '10px' : 'inherit',
                }}
              >
                {item.shares}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PriceShareContainer>
  );
};

export default PriceShare;
