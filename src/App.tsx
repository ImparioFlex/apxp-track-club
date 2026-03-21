import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import ApplyModal from './components/ApplyModal';
import SplashScreen from './components/SplashScreen';
import { ApplyProvider, useApply } from './context/ApplyContext';
import Home from './pages/Home';
import Athletes from './pages/Athletes';

function AppContent() {
  const { applyOpen, closeApply } = useApply();
  const [splashDone, setSplashDone] = useState(() => {
    return sessionStorage.getItem('apxp-splash-seen') === 'true';
  });

  const handleSplashComplete = useCallback(() => {
    sessionStorage.setItem('apxp-splash-seen', 'true');
    setSplashDone(true);
  }, []);

  return (
    <>
      {!splashDone && <SplashScreen onComplete={handleSplashComplete} />}
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
