// Popup.js
import React from 'react';

const DeletePopup = ({ onClose, onSubmit }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2 className='popup-headline'>Delete News</h2>
        <p className='popup-paragraph'>Are you sure want to delete this news?</p>
        <form onSubmit={onSubmit}>
          <div className='popup-btn'>
            <button onClick={onClose} className='cancel'>Cancel</button>
            <button type="submit" className='confirm-delete'>Delete</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeletePopup;
