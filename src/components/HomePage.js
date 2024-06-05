import React, { useState } from 'react';
import Navbar from './Navbar'; 
import './HomePage.css'; 

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="main-page">
      <Navbar />
      <div className="search-container">
        <h2>Search your style</h2>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={handleSearchChange} 
          className="search-input"
        />
      </div>
    </div>
  );
};

export default HomePage;
