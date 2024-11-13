import Login from './Login/Login'
import Signup from './SignUp/Signup'
import Home from './Home'
import Sidebar from './Sidebar/Sidebar'
import Search from './Search/Search'
import {Routes,Route}from 'react-router-dom'
import'./App.css'
import Movie from './Home/Movie'
import MovieDetail from './Home/MovieDetails'
function App() {

  return (
    <div className="app-container">
      <Sidebar/>
      <div className='content'>
        <Routes>
          <Route path="/"element={<Home />} />
          <Route path="/login"element={<Login/>}/>
          <Route path="/signup"element={<Signup/>}/>
          <Route path="/search"element={<Search/>}/>
          <Route path="/movies"element={<Movie/>}/>
          <Route path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
