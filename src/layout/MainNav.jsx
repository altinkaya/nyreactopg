import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 20px;
  background-color: #f8f8f8;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.5em;
`;

const StyledLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  padding: 10px 20px;
  &.active {
    color: #007BFF;
  }
`;

const UserGreeting = styled.span`
  margin-right: 20px;
`;

function MainNav({ currentUser, onLogout }) {
  const isLoggedIn = !!currentUser;

  return (
    <StyledNav>
      <StyledLink to="/home">Home</StyledLink>
      <StyledLink to="/about">About</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <StyledLink to="/posts">Posts</StyledLink>
      <StyledLink to="logout">Logud</StyledLink>
    </StyledNav>
    
  );
}

export default MainNav;
