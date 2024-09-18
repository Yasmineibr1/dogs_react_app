import React, { useState, useEffect } from 'react';
import './index.scss';  

function Home() {
  const [randomDog, setRandomDog] = useState('');
  // apifetch 
  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setRandomDog(data.message));
  }, []);

  return (
    <div className="home-page">
      <h1 className="home-title">Welcome to Dogs World!</h1>
      {randomDog && (
        <div className="image-container">
          <img src={randomDog} alt="Random Dog" className="random-dog-image" />
        </div>
      )}
    </div>
  );
}

export default Home;
