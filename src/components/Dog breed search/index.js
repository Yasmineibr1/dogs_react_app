import React, { useState } from 'react';

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
    <div>
      <h2>Search Dog by Breed</h2>
      <input
        type="text"
        placeholder="Enter breed (e.g., hound)"
        value={breed}
        onChange={(e) => setBreed(e.target.value.toLowerCase())}
      />
      <button onClick={handleSearch}>Search</button>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginTop: '20px' }}>
        {breedImages.map((image, index) => (
          <img key={index} src={image} alt="Breed" style={{ width: '100%' }} />
        ))}
      </div>
    </div>
  );
}

export default DogBreedSearch;
