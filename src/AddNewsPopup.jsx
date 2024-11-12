// Popup.js
import React from 'react';

const Popup = ({ onClose, onSubmit}) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2 className='popup-headline'>Create New News</h2>
        <p className='popup-paragraph'>Fill in the details for the new news</p>
        <form onSubmit={onSubmit}>
          <div>
            <label></label>
            <input
              type='text'
              placeholder=' Headline'
            />
          </div>
          <div>
            <label></label>
            <textarea
              placeholder=' Description'
              rows='4'
            />
          </div>
          <div className='popup-btn'>
            <button onClick={onClose} className='close'>Close</button>
            <button type="submit" className='confirm'>Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Popup;
