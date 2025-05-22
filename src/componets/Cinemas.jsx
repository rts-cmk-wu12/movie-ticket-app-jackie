
import { useEffect, useState } from "react";
export default function Cinemas() {
    const [cinemas, setCinemas] = useState([]);

    useEffect(() => {
        fetch('/cinemas.json') // Fetching from the same folder
            .then(response => response.json())
            .then(data => setCinemas(data))
            .catch(error => console.error('Error fetching cinemas:', error));
    }, []);

    return (
        <div className='cinemas'>
            <h1>Cinemas near you</h1>
            <ul>
                {cinemas.map((cinema, index) => (
                    <li key={index}>
                        <img className='placeholder' src={cinema.picture} alt={`${cinema.name} Picture`} />
                        <div className="cinema__div">  <h2 className='cinemaname'>{cinema.name}</h2>
                            <p className='cinematext'>Opening Time: {cinema.opening_time}</p></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};




