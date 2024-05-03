import React from 'react';

const App = ({ Component, pageProps }) => (
  <React.Fragment>
    <Component {...pageProps} />
  </React.Fragment>
);

export default App;
