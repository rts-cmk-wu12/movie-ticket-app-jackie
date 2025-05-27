import React from 'react';
import { Link } from 'react-router';
import '../style/popup.scss';
import { GoShieldCheck } from "react-icons/go";

function PopUp({ show }) {
    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-container">
                <div className="popup-icon">
                    <GoShieldCheck />
                </div>
                <h2>Your payment was successful</h2>
                <p>
                    Adele is a Scottish heiress whose extremely wealthy family owns estates and grounds. <br />
                    When she was a teenager. Read More
                </p>
                <Link to="/" className="popup-button">
                    See E-Ticket
                </Link>
            </div>
        </div>
    );
}

export default PopUp;
