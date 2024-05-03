import React from 'react';

export default function Container({ children }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
      }}
    >
      <div style={{ width: '85%' }}>{children}</div>
    </div>
  );
}
