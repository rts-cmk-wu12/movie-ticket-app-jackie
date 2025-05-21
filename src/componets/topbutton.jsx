// File: src/componets/topbutton.jsx
import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import '../style/topbutton.scss';

function TopButton({ showNow, setShowNow }) {
    const navigate = useNavigate();

    const goback = () => {
        navigate(-1);
    };

    return (
        <div className="topmenu">
            <div className="topmenu-header">
                <FaLongArrowAltLeft
                    onClick={goback}
                    className="back-button"
                    size={30}
                />
                <h1>Explore Movies</h1>
            </div>
            <div className="toggle-buttons">
                <button
                    className={showNow ? "active" : ""}
                    onClick={() => setShowNow(true)}
                >
                    Now Showing
                </button>
                <button
                    className={!showNow ? "active" : ""}
                    onClick={() => setShowNow(false)}
                >
                    Coming Soon
                </button>
            </div>
        </div>
    );
}

export default TopButton;
