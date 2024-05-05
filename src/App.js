import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from '../src/components/pages/Login';
import Home from '../src/components/pages/Home';
import CHospital from './components/pages/CHospital';
import CProfissional from './components/pages/CProfissional';
import Configuracao from './components/pages/Configuracao';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/chospital" element={<CHospital />}/>
        <Route path="/cprofissional" element={<CProfissional />}/>
        <Route path="/configuracao" element={<Configuracao />}/>
      </Routes>
    </Router>
  );
}

export default App;
