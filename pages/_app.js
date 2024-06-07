import React from 'react';
import WindowWidthContextProvider from './../context/WindowWidthContextProvider';


const App = ({ Component, pageProps }) => (
  <React.Fragment>
    <WindowWidthContextProvider>
      <Component {...pageProps} />
    </WindowWidthContextProvider>
  </React.Fragment>
);

export default App;
