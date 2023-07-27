import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="app-content">
        <h1>All News Data in One Place</h1>
        <div>
          <p>- Structured, Clean, Aggregated in Real Time</p>
          <p>- Find News Articles by Any Topic, Country, Language, Category, or Keyword</p>
        </div>
        <button className="app-btn-primary" onClick={() => navigate(`/news/${encodeURIComponent('news-org')}`)}>
          NEWS API
        </button>
        <button className="app-btn-primary" onClick={() => navigate(`/news/${encodeURIComponent('gnews-io')}`)}>
          GNEWS
        </button>
      </div>
    </div>
  );
}

export default App;
