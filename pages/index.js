import React from 'react';
import Posts from '../components/Posts';
import Footer from '../components/Footer';
import TopNavbar from '../components/Navbar';

export default function HomePage() {
  return (
    <div>
      <TopNavbar />
      <div style={{ marginTop: 60 }}>
        <Posts />
      </div>
      <Footer />
    </div>
  );
}
