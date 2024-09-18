import React, { useState, useEffect } from 'react';

function Home() {
  const [randomDog, setRandomDog] = useState('');

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => setRandomDog(data.message));
  }, []);

  return (
    <div>
      <h1>Welcome to Doggo World</h1>
      {randomDog && <img src={randomDog} alt="Random Dog" style={{ width: '100%' }} />}
    </div>
  );
}

export default Home;
