import React, { useEffect, useState } from 'react';
import '../style/ticket.scss';
const Ticket = () => {
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
    const [bookingDetails, setBookingDetails] = useState(null);

    useEffect(() => {
        const bookingInfo = localStorage.getItem("bookingInfo");
        setBookingDetails(bookingInfo ? JSON.parse(bookingInfo) : null);
    }, []);

    return (
        <>
        {/* <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                      
                          
                      
                        <div className="movie-info">
                            <h3>{movie.title}</h3>
                           
                        </div>
                    </div>
                ))}
            </div> */}
        <div className='ticket'>
            <h2>Booking Information</h2>
            {bookingDetails ? (
                <>
                    <p><strong>Cinema:</strong> {bookingDetails.cinema}</p>
                    <p><strong>Date:</strong> {bookingDetails.date}</p>
                    <p><strong>Time:</strong> {bookingDetails.time}</p>
                    <p><strong>Seats:</strong> {bookingDetails.seats.join(', ')}</p>
                    <p><strong>Total Price:</strong> ${bookingDetails.totalPrice}</p>
                </>
            ) : (
                <div>No booking information found.</div>
            )}
        </div></>
    );
};

export default Ticket;



