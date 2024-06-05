import React from 'react';
import styled from '@emotion/styled';

const Navbar = styled('nav')(() => ({
  backgroundColor: '#333',
  color: '#fff',
  width: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
}));

const ListItem = styled('li')(() => ({
  display: 'inline-block',
  marginRight: '20px',
  fontSize: '18px',
  cursor: 'pointer',
}));

const Link = styled('a')(() => ({
  color: '#fff',
  textDecoration: 'none',

  '&:hover': {
    textDecoration: 'underline',
  },
}));

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
