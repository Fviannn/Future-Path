import React from 'react';
import './NewsDetail.css';

function NewsDetail({ news, onClose }) {
  return (
    <div className="news-detail">
      <button onClick={onClose} className="back-button">Back to News Page</button>
      <div className="news-detail-content">
        <img src={news.image} className="news-detail-image" />
        <h2>{news.title}</h2>
        <p>{news.fullContent}</p>
      </div>
    </div>
  );
}

export default NewsDetail;
