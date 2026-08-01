import Navigation from './components/Navigation';
import Home from './pages/Home';
import Batches from './pages/Batches';
import Inventory from './pages/Inventory';
import Customers from './pages/Customers';
import Sales from './pages/Sales';
import { Routes, Route } from 'react-router-dom';

export default function app() {
  return (
    <div className="root-container min-h-dvh bg-neutral font-body">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Batches" element={<Batches />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Customers" element={<Customers />} />
        <Route path="/Sales" element={<Sales />} />
      </Routes>
    </div>
  );
}