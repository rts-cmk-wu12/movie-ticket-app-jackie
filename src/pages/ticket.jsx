import React, { useEffect, useState } from 'react';
import '../style/ticket.scss';
import TicketTop from '../componets/tickettop';
import { Link } from 'react-router';
import "../style/detailsmovie.scss";
import PopUp from '../componets/popup.jsx';
const Ticket = () => {
    const [bookingDetails, setBookingDetails] = useState(null);

    const [movieTitle, setMovieTitle] = useState("");

    useEffect(() => {
        const bookingInfo = localStorage.getItem("bookingInfo");
        setBookingDetails(bookingInfo ? JSON.parse(bookingInfo) : null);



        const storedTitle = localStorage.getItem(`movie_id`);
        setMovieTitle(storedTitle);
    }, []);

    return (
        <>
            <TicketTop />
            <div className='ticket'>

                {bookingDetails ? (
                    <> <div>
                        <p><strong>Movie Title:</strong> {movieTitle}</p>
                        <p>e-ticket</p></div>
                        <p><strong>Date:</strong> {bookingDetails.date}</p>
                        <p><strong>Seats:</strong> {bookingDetails.seats.join(', ')}</p>
                        <p><strong>Cinema:</strong> {bookingDetails.cinema}</p>
                        <p><strong>Time:</strong> {bookingDetails.time}</p>
                        <p><strong>Payment: </strong>Successful</p>
                        <p><strong>Order: </strong>01</p>

                    </>
                ) : (
                    <div>No booking information found.</div>
                )}
            </div>
            <div className="details-container"
            >
                <div className="details-info">
                    <Link to="/">
                        <button className="book-button">Download E-Ticket</button>
                    </Link></div></div>
        </>
    );
};

export default Ticket;




