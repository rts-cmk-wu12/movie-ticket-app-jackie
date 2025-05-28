
import React, { useState } from 'react';
import '../style/App.css';
import DetailsMovies from '../componets/detailsmovies';
import DetailsTop from '../componets/detailstop';


function Details() {


    return (
        <>
            <DetailsTop />
            <DetailsMovies />
        </>
    );
}

export default Details;
