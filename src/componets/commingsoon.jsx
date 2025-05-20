import React, { useEffect, useState } from 'react';
import "../style/commingsoon.scss";



function CommingSoon() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWFlMTFlNTllZGRkZmJkM2NlZGIwYTEzYjI3YjRlOCIsIm5iZiI6MTczNjc1NTEyMC4xNzIsInN1YiI6IjY3ODRjN2IwMTQzMWUwNTkxYWJiYTlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCFVQg_MtZlxXXSHpQYyN1rhaBF1FE7Gpw6C8LMaJ5g'
            }
        })
            .then(response => response.json())
            .then(data => {
                setMovies(data.results.slice(0, 10));
            })
            .catch(error => console.error('Fejl ved hentning:', error));
    }, []);




    return (
        <div className="comming-soon-container">
            <h2>Coming Soon</h2>
            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img
                            src={
                                movie.backdrop_path
                                    ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
                                    : 'https://via.placeholder.com/500x281?text=No+Image'
                            }
                            alt={movie.title}
                        />
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                            <p>
                                {new Date(movie.release_date).toLocaleString('default', {
                                    month: 'long',
                                    year: 'numeric',
                                })}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CommingSoon
