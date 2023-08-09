import React from "react";
import { useState } from "react";

function ListingCard({ listing, onDeleteListing }) {
  const { id, description, image, location } = listing

  const [emojiFavoriteButton, setEmojiFavoriteButton] = useState(false)
  function handleEmojiFavoriteButton() {
    setEmojiFavoriteButton((emojiFavoriteButton) => !emojiFavoriteButton)
  }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeleteListing(listing))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">

        {emojiFavoriteButton ? (
          <button className="emoji-button favorite active" onClick={handleEmojiFavoriteButton} >★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleEmojiFavoriteButton}>☆</button>
        )}
        <strong>{description}</strong>
        <span> {location}</span>
        <button className="emoji-button delete" onClick={handleDeleteClick}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
