import './App.css'
import {MOVIES} from './mocks/movies';
import {useState} from 'react';

function App() {

  const [MouseId, setMouseOn]=useState(null);

  const handleMouseEnter=(id)=>{
    setMouseOn(id);
  }

  const handleMouseLeave=()=>{
    setMouseOn(null);
  }

  const [movieName,setMovieName] =useState('');

  const handleInputChange=(event)=>{
    setMovieName(event.target.value);
  }

  return(
    <div>
      <input 
    className='search'
    placeholder='🔎 영화를 입력하세요.'
    value={movieName}
    onChange={handleInputChange}
    ></input>
    <div className='container'>
      {MOVIES.results.map(movie=>(
        <img 
        key={movie.id} 
        onMouseLeave={()=>handleMouseLeave()} 
        onMouseEnter={()=>handleMouseEnter(movie.id)} 
        className='movies' 
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        style={{ filter: MouseId === movie.id ? 'brightness(70%)' : 'brightness(100%)' ,
          outline: movieName === movie.title ? '3px solid red' : 'none'
        }
       }
        />
      ))}
    </div>
  
    </div>
  );

}

export default App
