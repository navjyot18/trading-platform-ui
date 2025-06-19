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
      icon: <LineChart size={24} color="#6b7280" aria-label="Markets" role="img" />,
      active: false,
    },
    {
      label: 'Trade',
      icon: <Zap size={24} color="#000000" aria-label="Trade" role="img" />,
      active: true,
    },
    {
      label: '$30.38',
      icon: <CreditCard size={24} color="#6b7280" aria-label="Balance" role="img" />,
      active: false,
    },
    {
      label: 'More',
      icon: <Menu size={24} color="#6b7280" aria-label="More" role="img" />,
      active: false,
    },
  ]);

  return (
    <NavContainer role="navigation" aria-label="Bottom navigation">
      {navItems.map((item, idx) => (
        <NavItem key={idx} active={item.active} tabIndex={0} aria-label={item.label} role="button">
          {item.icon}
          {item.label}
        </NavItem>
      ))}
    </NavContainer>
  );
}
