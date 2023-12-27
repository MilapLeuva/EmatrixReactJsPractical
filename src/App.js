import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Client from './Client';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/client' element={<Client />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
