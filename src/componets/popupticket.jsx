import React from 'react';
import { Link } from 'react-router';
import '../style/popup.scss';
import { FaFileArrowDown } from "react-icons/fa6";


function PopUpTicket({ show }) {
    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <div className="popup-icon">
                    <FaFileArrowDown />
                </div>
                <h2>Your ticket has been downloaded</h2>
                <p>
                    Adele is a Scottish heiress whose extremely
                    wealthy family owns estates and grounds.
                    When she was a teenager. Read More
                </p>
                <Link to="/" className="popup-button">
                    Back To Home
                </Link>
            </div>
        </div>
    );
}

export default PopUpTicket;
