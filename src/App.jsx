import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreateHero from './pages/CreateHero';
import Gallery from './pages/Gallery';
import HeroDetail from './pages/HeroDetail';

function App() {
  const [heroes, setHeroes] = useState([
    {
      id: 1,
      name: "Superman",
      power: "Flight",
      auraColor: "#00bfff",
      imageSrc: "/images/male-hero.png",
    },
  ]);

  const handleEdit = (id) => {
    console.log("Edit hero", id);
  };

  const handleDelete = (id) => {
    setHeroes(prev => prev.filter(hero => hero.id !== id));
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createCharacter" element={<CreateHero />} />
          <Route
            path="/gallery"
            element={
              <Gallery
                heroes={heroes}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            }
          />
          <Route path="/hero/:id" element={<HeroDetail heroes={heroes} />} />

        </Routes>
      </div>
    </div>
  );
}

export default App;
