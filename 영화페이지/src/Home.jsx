import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Home = () => {
    const [movies,setMovies]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const getMovies=async()=>{
            try{
            const response=await axios.get(
                'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
                {
            headers:{
                Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJmYzE1ZjIyMTc1NmFkYTkxOTU0YmNhM2UyNThiNyIsIm5iZiI6MTczMDI2NDc3NC44MTA1MzE5LCJzdWIiOiI2NzA2NTIzYzAwM2M5MjE0YTBiM2FkZmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iBufwL-tvRZe9Lb4hr6UQbRN578I9xT0-zXsPHj6AJo',
                }
        }
    );
            setMovies(response.data.results);
        }catch(error){
            console.error("Error fetching movies:",error);
        }
    };
        getMovies();
},[]);
    return (
        <div style={{ backgroundColor: 'black' ,minHeight:'100vh'}}>
            <div style={{ display: 'grid', gridTemplateColumns:'repeat(auto-fit,minmax(100px,1fr))',gap:'10px' }}>
                {movies.slice(0,20).map(movie=>(
                    <div key={movie.id} style={{textAlign: 'center' }}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            style={{ 
                                width: '100px', height: '150px',
                                borderRadius:'10px',
                                cursor:'pointer'
                            }} 
                            onClick={()=> navigate(`/movies/${movie.id}`)}
                            onMouseOver={e=>(e.currentTarget.style.filter = 'brightness(0.5)')}
                            onMouseOut={e => (e.currentTarget.style.filter = 'brightness(1)')}
                />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Home;