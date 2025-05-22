
import React, { useState } from 'react';
import '../style/App.css';
import DetailsTop from '../componets/detailstop';
import SeeMoreMovies from '../componets/seemoremovies';


function SeeMore() {


    return (
        <>
            <DetailsTop />
            <SeeMoreMovies />
        </>
    );
}

export default SeeMore;
