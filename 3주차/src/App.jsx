import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import UpComing from './pages/UpComing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movies/now-playing" element={<NowPlaying />} />
        <Route path="/movies/popular" element={<Popular />} />
        <Route path="/movies/top-rated" element={<TopRated />} />
        <Route path="/movies/upcoming" element={<UpComing />} />
      </Routes>
    </Router>
  );
}

export default App;
