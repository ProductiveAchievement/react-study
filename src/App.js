import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Home from './pages/Home';
import ModalButton from './pages/ModalButton';

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modalbutton" element={<ModalButton />} />
      </Routes>
    </BrowserRouter>
  );
}
