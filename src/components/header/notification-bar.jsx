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
    { component: <Navigation size={24} aria-label="Navigate" role="img" />, key: 'navigation', label: 'Navigate' },
    { component: <Star size={24} aria-label="Favorites" role="img" />, key: 'star', label: 'Favorites' },
    { component: <Bell size={24} aria-label="Notifications" role="img" />, key: 'bell', label: 'Notifications' },
  ]);

  return (
    <NavBar role="navigation" aria-label="Main notification bar">
      {icons.map((icon) => (
        <IconWrapper key={icon.key} tabIndex={0} aria-label={icon.label} role="button">
          {icon.component}
        </IconWrapper>
      ))}
    </NavBar>
  );
}
