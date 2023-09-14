import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import VideoCard from '../components/VideoCard';
import './Home.css';

const Home = () => {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    if (query) {
      setResults(query);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="home-page">
      <SearchBar onSearch={handleSearch} />
      <div className="video-results">
        {results.map((result, index) => (
          <VideoCard key={index} videoData={result} />
        ))}
      </div>
    </div>
  );
};

export default Home;
