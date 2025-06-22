import React from 'react';
import Button from './Button';
import './Style.css';

const PhotoCard = ({ imageUrl }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Thumbnail" className="card-img"/>
      <div className="card-body">
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <div className="card-footer">
          <div className="button-group">
            <Button txt='View'/>
            <Button txt='Edit'/>
          </div>
          <small className="timestamp">9 mins</small>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;