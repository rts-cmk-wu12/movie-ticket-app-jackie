// File: src/componets/topbutton.jsx
import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import '../style/topbutton.scss';

function DetailsTop({ showNow, setShowNow }) {
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
                <h1>Details Movie</h1>
            </div>
        </div>
    );
}

export default DetailsTop;
