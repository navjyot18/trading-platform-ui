import { useState } from 'react';
import { Container } from './header.styled';
import { BarChart2 } from 'lucide-react';

const Header = () => {
  const [headerData] = useState({
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png',
    alt: 'CSK Logo',
    title: 'Chennai Super Kings',
    volume: '$65.2M Vol.',
    currentPrice: '34¢',
    change: '+0.84%',
    chartIcon: { size: 30, color: '#000' },
  });
  return (
    <Container>
      <div className="stock-header" role="region" aria-label="Stock header">
        <div className="d-flex" style={{ gap: 12 }}>
          <div className="team-logo">
            <img src={headerData.logo} alt={headerData.alt} width={'100%'} height={'100%'} />
          </div>
          <div className="stock-info">
            <div className="title" aria-label="Stock title">
              {headerData.title}
            </div>
            <div className="volume" aria-label="Stock volume">
              {headerData.volume}
            </div>
          </div>
        </div>
        <div className="d-flex">
          <div className="price-change" aria-label="Price change">
            <div className="current-price" aria-label="Current price">
              {headerData.currentPrice}
            </div>
            <div className="change" aria-label="Change">
              {headerData.change}
            </div>
          </div>
          <div className="">
            <BarChart2
              size={headerData.chartIcon.size}
              color={headerData.chartIcon.color}
              aria-label="Chart"
              role="img"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
