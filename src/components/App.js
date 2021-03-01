import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingData, setListingData] = useState([])

  const URL = "http://localhost:6001/listings"

  useEffect(() => {
    fetch(URL)
    .then((response) => response.json())
    .then((response) => setListingData(response))
  }, []);

  function handleDeleteClick(e) {
    const itemId = parseInt(e.target.value)

    fetch(URL + `/${itemId}`, { method: "DELETE" });
    
    const updatedData = listingData.filter ((listing) => listing.id !== itemId)
    setListingData(updatedData);
  };

  return (
    <div className="app">
      <Header />
      <ListingsContainer listings={listingData} handleDeleteClick={handleDeleteClick} />
    </div>
  );
}

export default App;
