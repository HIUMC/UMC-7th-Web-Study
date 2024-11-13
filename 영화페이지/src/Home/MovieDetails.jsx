import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css"; // CSS 파일 불러오기

const MovieDetail = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                // 영화 기본 정보 가져오기
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}?language=ko-KR`,
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJmYzE1ZjIyMTc1NmFkYTkxOTU0YmNhM2UyNThiNyIsIm5iZiI6MTczMDI2NDc3NC44MTA1MzE5LCJzdWIiOiI2NzA2NTIzYzAwM2M5MjE0YTBiM2FkZmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iBufwL-tvRZe9Lb4hr6UQbRN578I9xT0-zXsPHj6AJo',
                        }
                    }
                );
                setMovie(response.data);

                // 영화 출연진 정보 가져오기
                const creditsResponse = await axios.get(
                    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=ko-KR`,
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWJmYzE1ZjIyMTc1NmFkYTkxOTU0YmNhM2UyNThiNyIsIm5iZiI6MTczMDI2NDc3NC44MTA1MzE5LCJzdWIiOiI2NzA2NTIzYzAwM2M5MjE0YTBiM2FkZmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.iBufwL-tvRZe9Lb4hr6UQbRN578I9xT0-zXsPHj6AJo',
                        }
                    }
                );
                setCredits(creditsResponse.data);
            } catch (error) {
                console.error("Error fetching movie details or credits:", error);
            }
        };
        fetchMovieDetails();
    }, [movieId]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div className="movie-detail-container">
            <div className="movie-header">
                <h1 className="movie-title">{movie.title}</h1>
                <p className="movie-info">평균: {movie.vote_average.toFixed(1)}</p>
                <p className="movie-info">개봉년도: {movie.release_date}</p>
                <p className="movie-info">런타임: {movie.runtime}분</p>
                <p className="movie-overview">{movie.overview}</p>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    className="movie-poster"
                />
            </div>

            {credits && (
                <div className="credits-section">
                    <h2 className="credits-title">감독/출연</h2>
                    <div className="credits-grid">
                        {/* 감독 정보 */}
                        {credits.crew
                            .filter(member => member.job === "Director")
                            .map(director => (
                                <div key={director.id} className="credit-item">
                                    <img
                                        src={`https://image.tmdb.org/t/p/w500${director.profile_path}`}
                                        alt={director.name}
                                        className="credit-profile-img"
                                    />
                                    <p className="credit-name">{director.name}</p>
                                    <p className="credit-role">(Director)</p>
                                </div>
                            ))}
                        {/* 출연 배우 정보 */}
                        {credits.cast.slice(0, 12).map(actor => (
                            <div key={actor.id} className="credit-item">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                                    alt={actor.name}
                                    className="credit-profile-img"
                                />
                                <p className="credit-name">{actor.name}</p>
                                <p className="credit-role">({actor.character})</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MovieDetail;
