import React, { useState, useEffect } from 'react';

function DogGallery() {
  const [dogImages, setDogImages] = useState([]);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/8')
      .then((response) => response.json())
      .then((data) => setDogImages(data.message));
  }, []);

  return (
    <div>
      <h2>Dog Gallery</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
        {dogImages.map((image, index) => (
          <img key={index} src={image} alt="Dog" style={{ width: '100%' }} />
        ))}
      </div>
    </div>
  );
}

export default DogGallery;
