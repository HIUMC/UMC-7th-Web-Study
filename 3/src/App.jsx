import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Homepage';
import SearchPage from './pages/Searchpage';
import MoviesPage from './pages/Moviespage';
import NowPlaying from './movies/Nowplaying';
import Popular from './movies/Popular';
import TopRated from './movies/Toprated';
import Upcoming from './movies/Upcoming';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/upcoming" element={<Upcoming />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
