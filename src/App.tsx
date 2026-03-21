import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import { ApplyProvider, useApply } from './context/ApplyContext';
import Home from './pages/Home';
import Athletes from './pages/Athletes';

function AppContent() {
  const { applyOpen, closeApply } = useApply();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/athletes" element={<Athletes />} />
      </Routes>
      <Footer />
      <ApplyModal open={applyOpen} onClose={closeApply} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ApplyProvider>
        <AppContent />
      </ApplyProvider>
    </BrowserRouter>
  );
}
