import { MOVIES } from './movies'

const Movies = () => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns:'repeat(10,1fr)',gap:'10px' }}>
                {MOVIES.results.slice(0,20).map(movie=>(
                    <div key={movie.id} style={{textAlign: 'center' }}>
                        <img 
                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                            alt={movie.title} 
                            style={{ 
                                width: '100px', height: '150px',
                                borderRadius:'10px',
                                cursor:'pointer'

                            }} 
                            onMouseOver={e=>(e.currentTarget.style.filter = 'brightness(0.5)')}
                            onMouseOut={e => (e.currentTarget.style.filter = 'brightness(1)')}
                />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Movies;