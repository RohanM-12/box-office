import React from 'react';
import Navbar from './Navbar';
import Title from './Title';

function MainPageLayout({ children }) {
  return (
    <div>
      <Title title="BOX OFFICE" subtitle="Looking for movies and Actors ?" />
      <Navbar />
      {children}
    </div>
  );
}

export default MainPageLayout;
