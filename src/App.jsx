import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Services from './pages/ServicesPage';
import Projects from './pages/ProjectsPage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}


export default App; 