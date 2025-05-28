
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import "../style/detailsmovie.scss";
import { Link } from "react-router";

function DetailsMovies() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);


    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYWFlMTFlNTllZGRkZmJkM2NlZGIwYTEzYjI3YjRlOCIsIm5iZiI6MTczNjc1NTEyMC4xNzIsInN1YiI6IjY3ODRjN2IwMTQzMWUwNTkxYWJiYTlkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bCFVQg_MtZlxXXSHpQYyN1rhaBF1FE7Gpw6C8LMaJ5g'
            }
        })
            .then(res => res.json())
            .then(data => {
                setMovie(data);
                localStorage.setItem(`movie_${movieId}`, JSON.stringify(data));
                //vi gemmer data.title i local storage under "movie_id"
                localStorage.setItem(`movie_id`, data.title);
            });


    }, [movieId]);
    return (
        <div className="details-container">
            {movie ? (
                <>
                    <img
                        className="movie-poster"
                        src={
                            movie.poster_path
                                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                                : 'https://via.placeholder.com/300x450?text=No+Image'
                        }
                        alt={movie.title}
                    />

                    <div className="details-info">
                        <h1>{movie.title}</h1>
                        <p className="rating">⭐ {movie.vote_average}</p>

                        <div className="tags">
                            {movie.genres && movie.genres.length > 0 ? (
                                movie.genres.slice(0, 2).map(genre => (
                                    <span key={genre.id} className="tag">{genre.name}</span>
                                ))
                            ) : (
                                <span className="tag">No genres available</span>
                            )}
                            <span className="tag">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
                        </div>

                        <h3>Synopsis</h3>
                        <p className="overview">{movie.overview}</p>
                        <Link to={`/seats/`}>
                            <button className="book-button">Book Ticket</button>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="loading">Loading...</div>
            )}
        </div>
    );
}

export default DetailsMovies;