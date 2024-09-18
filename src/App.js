
import './App.css';
import Home from './components/Home';
import DogGallery from './components/Dog gallery';
import DogBreedSearch from './components/Dog breed search';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Dog Gallery</Link></li>
            <li><Link to="/breedsearch">Breed Search</Link></li>
         
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<DogGallery />} />
          <Route path="/breedsearch" element={<DogBreedSearch/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;