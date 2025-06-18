import { Container } from './header.styled';
import { BarChart2 } from 'lucide-react';

const Header = () => {
  return (
    <Container>
      <div className="stock-header">
        <div className="d-flex" style={{ gap: 12 }}>
          <div className="team-logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Chennai_Super_Kings_Logo.svg/1200px-Chennai_Super_Kings_Logo.svg.png"
              alt="CSK Logo"
              width={'100%'}
              height={'100%'}
            />
          </div>
          <div className="stock-info">
            <div className="title">Chennai Super Kings</div>
            <div className="volume">$65.2M Vol.</div>
          </div>
        </div>
        <div className="d-flex">
          <div className="price-change">
            <div className="current-price">34¢</div>
            <div className="change">+0.84%</div>
          </div>
          <div className="">
            <BarChart2 size={30} color="#000" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
