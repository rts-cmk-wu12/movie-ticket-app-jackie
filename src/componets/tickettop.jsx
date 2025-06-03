// File: src/componets/topbutton.jsx
import React from 'react';
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import '../style/topbutton.scss';

function TicketTop({ showNow, setShowNow }) {
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
                <h1>E-ticket</h1>
            </div>
                        <h2>Instruction</h2>
            <p>Come to the cinema, show and scan the barcode to the space provided. Continue to comply with health protocols.</p>
        </div>
    );
}

export default TicketTop;