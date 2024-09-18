import React, { useState } from 'react';
import './index.scss';  // Assure-toi d'importer le fichier SCSS

function DogBreedSearch() {
  const [breed, setBreed] = useState('');
  const [breedImages, setBreedImages] = useState([]);

  const handleSearch = () => {
    fetch(`https://dog.ceo/api/breed/${breed}/images`)
      .then((response) => response.json())
      .then((data) => setBreedImages(data.message))
      .catch(() => alert('Invalid breed name!'));
  };

  return (
    <div className="breed-search">
      <h2>Search Dog by Breed</h2>
      <input
        type="text"
        placeholder="Enter breed (e.g., hound)"
        value={breed}
        onChange={(e) => setBreed(e.target.value.toLowerCase())}
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">Search</button>

      <div className="grid-container">
        {breedImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt="Breed" className="breed-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogBreedSearch;
