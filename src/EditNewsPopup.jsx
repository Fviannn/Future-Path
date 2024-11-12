// Popup.js
import React from 'react';

const EditPopup = ({ onClose, onSubmit }) => {
  return (
    <div className="popup-overlay">
      <div className="popup">
        <h2 className='popup-headline'>Edit News Content</h2>
        <p className='popup-paragraph'>Fill in the new content for the news</p>
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
            <button type="submit" className='confirm'>Confirm change</button>
          </div>  
        </form>
      </div>
    </div>
  );
};

export default EditPopup;
