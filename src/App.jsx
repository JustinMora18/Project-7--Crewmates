import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import CreateHero from './pages/CreateHero';

function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crear" element={<CreateHero />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
