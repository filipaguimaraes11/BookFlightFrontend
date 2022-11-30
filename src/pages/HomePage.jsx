import React from 'react';
import './HomePage.css';
import Search from '../components/Search';
import plane from '../assets/plane.jpg';

function HomePage() {
  return (
    
    <div className="mainDiv">
      <div className="searchContainer">
        <h2>Let's get you traveling</h2>
        <Search />
      </div>
      <div className="datesContainer">
        <form></form>
      </div>
    </div>
  );
}

export default HomePage;
