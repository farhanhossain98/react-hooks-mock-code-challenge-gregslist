import React from "react";
import ListingCard from "./ListingCard";
import { useState, useEffect } from "react";

function ListingsContainer({ searchInput }) {
  const [listings, setListings] = useState([])
  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then((r) => r.json())
      .then((listings) => setListings(listings))
  }, [])

  function handleDeleteListing(deletedListing) {
    const updatedListing = listings.filter((listing) => listing.id !== deletedListing.id)
    setListings(updatedListing)
  }

  const filterListings = listings.filter((listing) => {
    return listing.description.toLowerCase().includes(searchInput.toLowerCase())
  })

  const listingsToDisplay = filterListings.map((listing) => {
    return <ListingCard key={listing.id} listing={listing} onDeleteListing={handleDeleteListing} />
  })



  return (
    <main className="container">
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
