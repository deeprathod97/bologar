// src/components/NewsDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import newsData from '../data/newsData';
import './NewsDetail.css'

const NewsDetail = () => {
  const { id } = useParams();
  const newsItem = newsData.find((news) => news.id === parseInt(id));

  return (
    <div className="news-detail">
      <h1>{newsItem.title}</h1>
      <img src={newsItem.image} alt={newsItem.title} />
      <p>{newsItem.content}</p>
    </div>
  );
};

export default NewsDetail;
