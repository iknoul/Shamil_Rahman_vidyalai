import React from 'react';
import styled from '@emotion/styled';

const Navbar = styled.nav`
  background-color: #333;
  color: #fff;
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
    <div>
      <Navbar>
        <ul style={{}}>
          <ListItem>
            <Link href={'/'}>Home</Link>
          </ListItem>
          <ListItem>
            <Link href={'/users'}>Users</Link>
          </ListItem>
        </ul>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
