import React from 'react';
import './HomePage.css'
import Search from '../components/Search';
import plane from '../assets/plane.jpg';

function HomePage() {
  return (
    //<div style={{backgroundImage: `url(${plane})`}}>
    <div className='mainDiv'>
      <div className='divContent'>
        <h2>
            Let's get you traveling
        </h2>
        <Search />
        </div>
    </div>
  );
}

export default HomePage;
