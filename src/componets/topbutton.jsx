import React, { useEffect, useState } from 'react';
import "../style/topbutton.scss";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router";

function TopButton() {

    const navigate = useNavigate();

    const goback = () => {
        navigate(-1);
    };


    return (
        <div className='topmenu'>
            <FaLongArrowAltLeft
                onClick={goback}
                className="back-button"
                size={50}
            />,
            <h1>Explore Movie</h1>

        </div>
    );
}

export default TopButton;
