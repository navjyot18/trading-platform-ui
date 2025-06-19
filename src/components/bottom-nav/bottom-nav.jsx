import React, { useState } from 'react';
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
  const [navItems] = useState([
    {
      label: 'Markets',
      icon: <LineChart size={24} color="#6b7280" />,
      active: false,
    },
    {
      label: 'Trade',
      icon: <Zap size={24} color="#000000" />,
      active: true,
    },
    {
      label: '$30.38',
      icon: <CreditCard size={24} color="#6b7280" />,
      active: false,
    },
    {
      label: 'More',
      icon: <Menu size={24} color="#6b7280" />,
      active: false,
    },
  ]);

  return (
    <NavContainer>
      {navItems.map((item, idx) => (
        <NavItem key={idx} active={item.active}>
          {item.icon}
          {item.label}
        </NavItem>
      ))}
    </NavContainer>
  );
}
