import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDeleteClick }) {

  const displayCards = listings.map((listing) => {
    return <ListingCard 
      key={listing.id} 
      image={listing.image}
      id={listing.id} 
      description={listing.description}
      location={listing.location} 
      handleDeleteClick={handleDeleteClick}
      />
  })

  return (
    <main>
      <ul className="cards">
        {displayCards}
      </ul>
    </main>
  );
}

export default ListingsContainer;
