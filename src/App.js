import './App.css';
import { Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/create"/>
        <Route path="/event"/>
      </Routes>

      
    </div>
  );
}

export default App;
