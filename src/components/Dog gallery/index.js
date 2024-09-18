import React, { useState, useEffect } from 'react';
import './index.scss';  

function DogGallery() {
  const [dogImages, setDogImages] = useState([]);
 //api fetch
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/8')
      .then((response) => response.json())
      .then((data) => setDogImages(data.message));
  }, []);

  return (
    <div className="dog-gallery">
      <h2 className="gallery-title">Dogs Gallery!</h2>
      <div className="grid-container">
        {dogImages.map((image, index) => (
          <div className="card" key={index}>
            <img src={image} alt="Dog image" className="dog-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogGallery;
