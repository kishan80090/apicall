
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import India from './components/India';
import Bihar from './components/Bihar';
import Up from './components/Up';

import './App.css';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<India />} />
      <Route path="/up" element={<Up />} />
      <Route path="/bihar" element={<Bihar />} />
    </Routes>
  </Router>
  );
}
export default App;

