import React from 'react';
import styled from 'styled-components';
import { LineChart, Zap, CreditCard, Menu } from 'lucide-react';

const NavContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 0;
  background-color: #ffffff;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  color: ${({ active }) => (active ? '#000000' : '#6b7280')};
  font-weight: ${({ active }) => (active ? '600' : '500')};
  font-size: 14px;
`;

export default function BottomNav() {
  return (
    <NavContainer>
      <NavItem>
        <LineChart size={24} color="#6b7280" />
        Markets
      </NavItem>
      <NavItem active>
        <Zap size={24} color="#000000" />
        Trade
      </NavItem>
      <NavItem>
        <CreditCard size={24} color="#6b7280" />
        $30.38
      </NavItem>
      <NavItem>
        <Menu size={24} color="#6b7280" />
        More
      </NavItem>
    </NavContainer>
  );
}
