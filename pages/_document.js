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
            html {
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
          
            body {
              font-family: 'Arial', sans-serif;
              margin: 0;
              padding: 0;
              /* Add more styles as needed */
            }

            div,
            p,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6 {
              margin: 0;
            }
          `}</style>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
