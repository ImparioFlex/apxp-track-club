import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Athletes from './pages/Athletes';
import Apply from './pages/Apply';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/athletes" element={<Athletes />} />
        <Route path="/apply" element={<Apply />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
