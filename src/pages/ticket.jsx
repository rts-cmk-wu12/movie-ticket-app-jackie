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
                    <>

                        <div>
                            <h2>Film:</h2> <strong>{movieTitle}</strong>
                        </div>
                        <div><strong className='eticket'>E-Ticket</strong></div>

                        <div>
                            <h2>Date:</h2> <strong>{bookingDetails.date}</strong>
                        </div>
                        <div>
                            <h2>Seats:</h2> <strong>{bookingDetails.seats.join(', ')}</strong>
                        </div>
                        <div>
                            <h2>Cinema:</h2> <strong>{bookingDetails.cinema}</strong>
                        </div>
                        <div>
                            <h2>Time:</h2> <strong>{bookingDetails.time}</strong>
                        </div>
                        <div>
                            <h2>Payment:</h2> <strong>Successful</strong>
                        </div>
                        <div>
                            <h2>Order:</h2> <strong>01</strong>
                        </div>


                    </>
                ) : (
                    <div>No booking information found.</div>
                )}
                <img src="Barcode.png" alt="" />
            </div>

            <div className="ticket-container">
                <div className="details-info">
                    <button className="book-button" onClick={handleShowPopup}>
                        Download E-Ticket
                    </button>
                </div>
            </div>


            <PopUpTicket show={showPopup} />
        </>
    );
};

export default Ticket;
