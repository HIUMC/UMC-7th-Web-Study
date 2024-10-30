// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Search from './pages/Search';
import MovieCategories from './pages/MovieCategories'; 
import NowPlaying from './pages/NowPlaying';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';

const App = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Sidebar />
        <div style={styles.mainContent}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movies" element={<MovieCategories />} /> 
            <Route path="/movies/now-playing" element={<NowPlaying />} />
            <Route path="/movies/popular" element={<Popular />} />
            <Route path="/movies/top-rated" element={<TopRated />} />
            <Route path="/movies/upcoming" element={<Upcoming />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};


const styles = {
  appContainer: {
    display: 'flex',
    alignItems: 'stretch', // 두 컨테이너가 같은 높이를 유지하도록 설정
    minHeight: '100vh',
  },
  mainContent: {
    flex: 1,
    padding: '20px',
    backgroundColor: '#181818',
    color: '#fff',
  },
};

// const styles = {
//   appContainer: {
//     display: 'flex',
//     minHeight: '100vh',
//   },
//   mainContent: {
//     flex: 1,
//     padding: '20px',
//     backgroundColor: '#181818',
//     color: '#fff',
//     minHeight: '100vh',
//   },
// };


export default App;
