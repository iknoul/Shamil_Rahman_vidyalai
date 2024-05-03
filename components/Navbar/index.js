import React from 'react';
import styled from '@emotion/styled';

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
  padding: 15px 20px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  font-size: 18px;
  cursor: pointer;
`;

const Link = styled.a`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const TopNavbar = () => {
  return (
    <Navbar>
      <ul
        style={{
          listStyleType: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <ListItem>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#">About</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Services</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Contact</Link>
        </ListItem>
      </ul>
    </Navbar>
  );
};

export default TopNavbar;
