import React, { useState } from 'react';
import styled from 'styled-components';
import { Navigation, Star, Bell } from 'lucide-react';

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #e5e7eb;
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #111827;
`;

export default function NotificationBar() {
  const [icons] = useState([
    { component: <Navigation size={24} />, key: 'navigation' },
    { component: <Star size={24} />, key: 'star' },
    { component: <Bell size={24} />, key: 'bell' },
  ]);

  return (
    <NavBar>
      {icons.map((icon) => (
        <IconWrapper key={icon.key}>{icon.component}</IconWrapper>
      ))}
    </NavBar>
  );
}
