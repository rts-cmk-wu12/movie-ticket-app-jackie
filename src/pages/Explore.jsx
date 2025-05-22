
import React, { useState } from 'react';
import '../style/App.css';
import Footer from '../componets/footer';
import TopMovies from '../componets/topmovies';
import TopButton from '../componets/topbutton';
import RecommendedMovies from '../componets/recommendedmovies';
import CommingSoon from '../componets/commingsoon';

function Explore() {
    const [showNow, setShowNow] = useState(true);

    return (
        <>
            <TopButton showNow={showNow} setShowNow={setShowNow} />
            {showNow ? (
                <>
                    <TopMovies />
                    <RecommendedMovies />
                </>
            ) : (
                <CommingSoon />
            )}
            <Footer />
        </>
    );
}

export default Explore;
