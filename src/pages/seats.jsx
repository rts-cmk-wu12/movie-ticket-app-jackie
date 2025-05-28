
import React, { useState } from 'react';
import '../style/App.css';
import SelectSeats from '../componets/selectseats';
import DetailsTop from '../componets/detailstop';
import "../style/seats.scss";


function Seats() {


    return (
        <>
            <DetailsTop />
            <SelectSeats />
        </>
    );
}

export default Seats;
