import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style>{`
            /* global CSS styles */
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              /* Add more styles as needed */
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
