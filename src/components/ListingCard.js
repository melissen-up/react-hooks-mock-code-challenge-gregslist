import React, { useState } from "react";

function ListingCard({ image="https://via.placeholder.com/300x300", description, location, id, handleDeleteClick}) {
  const [favorite, setFavorite] = useState(false)

  function handleFavorite() {
    setFavorite((favorite) => !favorite)
  };

  return (
    <li className="card">
      <div className={"image"}>
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favorite ? (
          <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} value={id} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
