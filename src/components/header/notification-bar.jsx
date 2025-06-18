import React from 'react';
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
  return (
    <NavBar>
      <IconWrapper>
        <Navigation size={24} />
      </IconWrapper>
      <div className="d-flex align-items-center justify-content-center gap-2">
        <IconWrapper>
          <Star size={24} />
        </IconWrapper>
        <IconWrapper>
          <Bell size={24} />
        </IconWrapper>
      </div>
    </NavBar>
  );
}
