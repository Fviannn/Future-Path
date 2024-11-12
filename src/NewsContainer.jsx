import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import DeletePopup from './DeleteNewsPopup';
import EditPopup from './EditNewsPopup';
import './Style.css';

function NewsContainer({ openNewsDetail }) {
  const newsItems = [
    {
      title: 'Internet cepat buat apa?',
      content: 'Ayo ayo ganyang fufuafafa, ganyang fufuafafa sekarang juga...',
      image: 'news1.jpg',
      fullContent: 'Ini full konten.',
    },
    {
      title: 'Bro fell off',
      content: 'From The Screen, To The Ring, To The Pen...',
      image: 'news2.jpg',
      fullContent: 'Full news content goes here.',
    },
    {
      title: 'Internet Cepat Buat apa?',
      content: 'ha? ho? yo ga tau kok tanya saya...',
      image: 'news3.jpg',
      fullContent: 'Lorem ipsum dolor sit amet...',
    },
  ];

  const [isEditPopupVisible, setIsEditPopupVisible] = useState(false);
  const [isDeletePopupVisible, setIsDeletePopupVisible] = useState(false);

  const toggleEditPopup = () => {
    setIsEditPopupVisible(!isEditPopupVisible);
    setIsDeletePopupVisible(false); // Pastikan popup delete tertutup
  };

  const toggleDeletePopup = () => {
    setIsDeletePopupVisible(!isDeletePopupVisible);
    setIsEditPopupVisible(false); // Pastikan popup edit tertutup
  };

  const handleEditSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    // Perform your submit logic here (e.g., updating the news content)
    setIsEditPopupVisible(false); // Close popup after submission
  };

  const handleDeleteSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    // Perform your submit logic here (e.g., updating the news content)
    setIsDeletePopupVisible(false); // Close popup after submission
  };

  return (
    <div className="news-container">
      {newsItems.map((news, index) => (
        <div key={index} className="news-item">
          {/* <div className="news-image">
            <img alt="News" src={news} className="zoom-image" />
          </div> */}
          <div className="content">
            <h2 className="news-title">{news.title}</h2>
            <p className="news-content">{news.content}</p>
            <button
              className="read-more"
              onClick={() => openNewsDetail(news)}
            >
              Read more
            </button>
          </div>
          <div className="actions">
            <button className="edit" onClick={toggleEditPopup}><FaEdit size={16} /></button>
            <button className="delete" onClick={toggleDeletePopup}><FaTrash size={16} /></button>
            {isEditPopupVisible && <EditPopup onClose={toggleEditPopup} onSubmit={handleEditSubmit}/>}
            {isDeletePopupVisible && <DeletePopup onClose={toggleDeletePopup} onSubmit={handleDeleteSubmit} />}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NewsContainer;