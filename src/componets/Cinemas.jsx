
import { useEffect,useState } from "react";
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
            <h2 className='cinemaname'>{cinema.name}</h2>
            <img className='placeholder' src={cinema.picture} alt={`${cinema.name} Picture`} />
            <p className='cinematext'>Opening Time: {cinema.opening_time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};




