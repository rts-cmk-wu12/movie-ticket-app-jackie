import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import "../style/topmovies.scss";

function RecommendedMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/157336/recommendations?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWFlMTFlNTllZGRkZmJkM2NlZGIwYTEzYjI3YjRlOCIsIm5iZiI6MTczNjc1NTEyMC4xNzIsInN1YiI6IjY3ODRjN2IwMTQzMWUwNTkxYWJiYTlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCFVQg_MtZlxXXSHpQYyN1rhaBF1FE7Gpw6C8LMaJ5g'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data?.results) {
                    setMovies(data.results.slice(0, 30));
                }
            })
            .catch(error => console.error("Error fetching recommended movies:", error));
    }, []);

    return (
        <div className="top-movies-section">
            <div className="top-movies-header">
                <h2>Recommended Movies</h2>
            </div>
            <div className="top-movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <Link to={`/details/${movie.id}`}>
                            <img
                                src={
                                    movie.poster_path
                                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                        : 'https://via.placeholder.com/300x450?text=No+Image'
                                }
                                alt={movie.title}
                            />
                        </Link>
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecommendedMovies;
