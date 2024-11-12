import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import Navbar from './Navbar';
import Banner from './Banner';
import NewsContainer from './NewsContainer';
import './Style.css';
import Popup from './AddNewsPopup';


function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh
    // Perform your submit logic here (e.g., updating the news content)
    setIsPopupVisible(false); // Close popup after submission
  };

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <button className="add-news" onClick={togglePopup}>
        <FaPlusCircle className="FaPlusCircle " />Add News
      </button>
      <NewsContainer />
      {/* {showPopup && <AddNewsPopup closeForm={closeForm} />}
      {selectedNews ? (<NewsDetail news={selectedNews} onClose={closeNewsDetail} />) : (<NewsContainer openNewsDetail={openNewsDetail} />)} */}
      {isPopupVisible && <Popup onClose={togglePopup} onSubmit={handleSubmit}/>}
    </div>
  );
}

export default App;



