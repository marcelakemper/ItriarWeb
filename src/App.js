import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/pages/Login';
import Home from '../src/components/pages/Home';
import CHospital from './components/pages/CHospital';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chospital" element={<CHospital />}/>
      </Routes>
    </Router>
  );
}

export default App;
