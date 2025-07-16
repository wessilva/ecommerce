import Index from './pages'
import Register from './pages/Register'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App
