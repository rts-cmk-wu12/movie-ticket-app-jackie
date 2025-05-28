import React, { useEffect, useState } from 'react';
import '../style/ticket.scss';
import TicketTop from '../componets/tickettop';
import { Link } from 'react-router';
import "../style/detailsmovie.scss";
import PopUpTicket from '../componets/popupticket.jsx';
const Ticket = () => {
    const [bookingDetails, setBookingDetails] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const [movieTitle, setMovieTitle] = useState("");


    useEffect(() => {
        const bookingInfo = localStorage.getItem("bookingInfo");
        setBookingDetails(bookingInfo ? JSON.parse(bookingInfo) : null);



        const storedTitle = localStorage.getItem(`movie_id`);
        setMovieTitle(storedTitle);

    }, []);


    const handleShowPopup = () => {
        setShowPopup(true);
    };


    const handleClosePopup = () => {
        setShowPopup(false);
    };

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

                    <button className="book-button" onClick={handleShowPopup}>
                        Download E-Ticket
                    </button>
                </div></div>
            <PopUpTicket show={showPopup} />
        </>
    );
};

export default Ticket;




