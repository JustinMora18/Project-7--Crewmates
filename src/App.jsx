import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './supabase/client';

import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreateHero from './pages/CreateHero';
import Gallery from './pages/Gallery';
import HeroDetail from './pages/HeroDetail';

function App() {
  const [heroes, setHeroes] = useState([]);

  async function fetchHeroes() {
    let { data, error } = await supabase
      .from('heroes')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) {
      setHeroes(data);
    }
  }

  useEffect(() => {
    fetchHeroes();
  }, []);

  const handleEdit = (id) => {
    console.log('Edit hero', id);
  };

  const handleDelete = async (id) => {
    const { error } = await supabase
      .from('heroes')
      .delete()
      .eq('id', id);

    if (!error) {
      setHeroes((prev) => prev.filter((hero) => hero.id !== id));
    }
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createCharacter" element={<CreateHero fetchHeroes={fetchHeroes} />} />
          <Route path="/gallery" element={<Gallery heroes={heroes} onEdit={handleEdit} onDelete={handleDelete} />} />
          <Route path="/hero/:id" element={<HeroDetail heroes={heroes} fetchHeroes={fetchHeroes} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
