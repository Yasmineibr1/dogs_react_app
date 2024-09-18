
import './App.scss';
import Home from './components/Home';
import DogGallery from './components/Dog gallery';
import DogBreedSearch from './components/Dog breed search';
import Navbar from './components/Navbar/navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Navbar /> 
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