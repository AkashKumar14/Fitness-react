import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoCard from './VideoCard';
import './SearchBar.css';
import LoadingIcons from 'react-loading-icons';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log('Query changed:', query);
    if (query) {
      setLoading(true);
      axios
        .get('https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos', {
          params: {
            q: query,
            numResults: 10,
          },
        })
        .then((response) => {
          console.log('API Response:', response.data);
          if (Array.isArray(response.data.results)) {
            setResults(response.data.results);
          } else {
            setResults([]);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for videos..."
          value={query}
          onChange={handleInputChange}
        />
      </div>
      {loading ? (
        <div style={{ marginLeft: '45%', height: 115 }}>
          <LoadingIcons.Bars />
        </div>
      ) : (
        <div className="video-card-container">
          {results.map((videoData, index) => (
            <VideoCard key={index} videoData={videoData} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
