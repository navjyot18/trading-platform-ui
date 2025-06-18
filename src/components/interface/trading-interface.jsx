import { useState } from 'react';
import styled from 'styled-components';
import { ChevronDown, Info } from 'lucide-react';
import { Tabs } from '../tabs/tabs';
const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  padding: 16px 0px 0px 0px;
  font-size: 12px;
`;

const DropdownContainer = styled.div`
  margin-bottom: 12px;
  margin-top: 16px;
`;

const DropdownButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f3f4f6;
  border-radius: 8px;
  padding: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border: 2px solid rgba(233, 233, 233, 1);
  &:hover {
    background-color: #e5e7eb;
  }
`;

const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const UnderlinedText = styled.span`
  color: #1f2937;
  font-weight: 500;
  text-decoration: underline;
`;

const InputContainer = styled.div`
  margin-bottom: 12px;
`;

const InputWrapper = styled.div`
  background-color: #f3f4f6;
  border-radius: 8px;
  padding: 10px;
  border: 2px solid rgba(233, 233, 233, 1);
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const InputLabel = styled.span`
  color: #6b7280;
`;

const StyledInput = styled.input`
  background-color: transparent;
  text-align: right;
  color: #1f2937;
  font-weight: 600;
  font-size: 12px;
  width: 64px;
  outline: none;
  border: none;
`;

const SliderContainer = styled.div`
  margin-bottom: 32px;
`;

const SliderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  margin-right: 16px;
  position: relative;
`;

const CustomSlider = styled.input.attrs({ type: 'range' })`
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: ${({ value }) =>
    `linear-gradient(to right, #1f2937 0%, #1f2937 ${value}%, #d1d5db ${value}%, #d1d5db 100%)`};
  outline: none;
  cursor: pointer;
  appearance: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #1f2937;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &::-moz-range-thumb {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #1f2937;
    cursor: pointer;
    border: 2px solid #ffffff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const PercentageDisplay = styled.div`
  background-color: #e5e7eb;
  border-radius: 4px;
  padding: 4px;
  min-width: 40px;
  text-align: center;
`;

const PercentageText = styled.span`
  color: #1f2937;
  font-weight: 600;
`;

const SummaryContainer = styled.div`
  margin-bottom: 12px;
  border-top: 4px solid rgba(236, 236, 236, 1);
  padding-top: 6px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const SummaryLabel = styled.span`
  color: #1f2937;
  font-weight: 600;
  font-size: 12px;
`;

const SummaryValue = styled.span`
  color: #1f2937;
  font-weight: 600;
  font-size: 12px;
`;

const ToWinContainer = styled.div`
  display: flex;
  align-items: center;
`;

const DollarIcon = styled.div`
  width: 24px;
  height: 16px;
  background-color: #fbbf24;
  border-radius: 2px;
  margin-left: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DollarText = styled.span`
  font-size: 12px;
  font-weight: bold;
  color: #1f2937;
`;

const ActionButton = styled.button`
  width: 100%;
  background-color: #000;
  color: white;
  font-weight: 600;
  padding: 10px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-family: IBM Plex Sans;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  &:hover {
    background-color: #374151;
  }
`;

export function TradingInterface() {
  const [orderType, setOrderType] = useState('BUY/LONG');
  const [shares, setShares] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [price, setPrice] = useState('34.5');

  const handleSliderChange = (e) => {
    setPercentage(parseInt(e.target.value));
  };

  const orderTotal = shares * parseFloat(price) || 0;

  return (
    <Container>
      <Tabs
        tabs={[{ label: 'BUY/LONG' }, { label: 'SELL/SHORT' }]}
        selectedTab={{ label: orderType }}
        onClick={(tab) => setOrderType(tab.label)}
      />
      <DropdownContainer>
        <DropdownButton>
          <div className="d-flex align-items-center">
            <Info size={20} color="#6b7280" style={{ marginRight: '12px' }} />
            <span style={{ flex: 1, color: '#1f2937', fontWeight: 500 }}>Limit</span>
          </div>
          <ChevronDown size={20} color="#6b7280" />
        </DropdownButton>
      </DropdownContainer>
      <InfoRow>
        <UnderlinedText>Available to Trade</UnderlinedText>
        <span style={{ color: '#1f2937', fontWeight: 600 }}>0.00 USDC</span>
      </InfoRow>
      <InputContainer>
        <InputWrapper>
          <InputRow>
            <InputLabel>Price (USD)</InputLabel>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StyledInput value={price} onChange={(e) => setPrice(e.target.value)} />
              <UnderlinedText style={{ marginLeft: '4px' }}>Mid</UnderlinedText>
            </div>
          </InputRow>
        </InputWrapper>
      </InputContainer>
      <InputContainer>
        <InputWrapper>
          <InputRow>
            <InputLabel>Shares</InputLabel>
            <StyledInput
              type="number"
              value={shares}
              onChange={(e) => setShares(parseInt(e.target.value) || 0)}
              min="0"
            />
          </InputRow>
        </InputWrapper>
      </InputContainer>
      <SliderContainer>
        <SliderRow>
          <SliderWrapper>
            <CustomSlider value={percentage} onChange={handleSliderChange} />
          </SliderWrapper>
          <PercentageDisplay>
            <PercentageText>{percentage} %</PercentageText>
          </PercentageDisplay>
        </SliderRow>
      </SliderContainer>
      <SummaryContainer>
        <SummaryRow>
          <SummaryLabel>Order Total</SummaryLabel>
          <SummaryValue>${orderTotal.toFixed(0)}</SummaryValue>
        </SummaryRow>
        <SummaryRow>
          <ToWinContainer>
            <SummaryLabel>To Win</SummaryLabel>
            <DollarIcon>
              <DollarText>$</DollarText>
            </DollarIcon>
          </ToWinContainer>
          <SummaryValue>$0</SummaryValue>
        </SummaryRow>
      </SummaryContainer>
      <ActionButton>{`${orderType}`} CSK</ActionButton>
    </Container>
  );
}
