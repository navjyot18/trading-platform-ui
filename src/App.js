import './App.css';
import Header from './components/header/header';
import OpenOrder from './components/open-orders/openOrder';
import PriceShare from './components/price-share/priceShare';
import { TradingInterface } from './components/interface/trading-interface';
import BottomNav from './components/bottom-nav/bottom-nav';
import NotificationBar from './components/header/notification-bar';

function App() {
  return (
    <div className="App">
      <NotificationBar />
      <Header />
      <div className="d-flex trading-info" style={{ gap: 22 }}>
        <div style={{ width: '60%' }}>
          <TradingInterface />
        </div>
        <div style={{ width: '40%' }}>
          <PriceShare />
        </div>
      </div>
      <OpenOrder />
      <BottomNav />
    </div>
  );
}

export default App;
