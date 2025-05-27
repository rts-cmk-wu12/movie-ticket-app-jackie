import React, { useState, useEffect } from 'react';
import '../style/seats.scss';
import { Link } from "react-router";

const times = ['10:00 AM', '01:00 PM', '04:00 PM', '07:00 PM', '09:30 PM'];
const today = new Date();
const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(d.getDate() + i);
    return d.toLocaleDateString('da-DK', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
    });
});

const rows = 5;
const cols = 8;
const reservedSeats = [
    [2, 0], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7],
    [3, 0], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [3, 7],
];

const MAX_SELECTION = 6;
const SEAT_PRICE = 49;

function SelectSeats() {
    const [cinemas, setCinemas] = useState([]);
    const [selectedCinema, setSelectedCinema] = useState('');
    const [selectedDate, setSelectedDate] = useState(dates[0]);
    const [selectedTime, setSelectedTime] = useState(times[1]);
    const [selectedSeats, setSelectedSeats] = useState([]);

    useEffect(() => {
        fetch('/cinemas.json')
            .then(response => response.json())
            .then(data => {
                setCinemas(data);
                if (data.length > 0) {
                    setSelectedCinema(data[0].name);
                }
            })
            .catch(error => console.error('Error fetching cinemas:', error));
    }, []);

    const toggleSeat = (row, col) => {
        const seatId = `${row}-${col}`;
        const isReserved = reservedSeats.some(([r, c]) => r === row && c === col);
        if (isReserved) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter(seat => seat !== seatId));
        } else {
            if (selectedSeats.length >= MAX_SELECTION) {
                alert(`Du kan maks vælge ${MAX_SELECTION} sæder.`);
                return;
            }
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    const totalPrice = selectedSeats.length * SEAT_PRICE;

    const handleCheckout = () => {
        const existingBookings = JSON.parse(localStorage.getItem("bookings")) || [];


        const newBookingId = existingBookings.length > 0 ? existingBookings[existingBookings.length - 1].id + 1 : 1;

        const newBooking = {
            id: newBookingId,
            cinema: selectedCinema,
            date: selectedDate,
            time: selectedTime,
            seats: selectedSeats,
            totalPrice: totalPrice
        };

        existingBookings.push(newBooking);
        localStorage.setItem("bookings", JSON.stringify(existingBookings));

        localStorage.setItem("totalPrice", totalPrice.toString());
    };


    return (
        <div className="select-seats">
            <h2>Select Seats</h2>

            <div className="dropdowns">
                <select value={selectedCinema} onChange={e => setSelectedCinema(e.target.value)}>
                    {cinemas.map(cinema => (
                        <option key={cinema.name} value={cinema.name}>
                            {cinema.name}
                        </option>
                    ))}
                </select>

                <select value={selectedDate} onChange={e => setSelectedDate(e.target.value)}>
                    {dates.map(date => (
                        <option key={date} value={date}>{date}</option>
                    ))}
                </select>

                <select value={selectedTime} onChange={e => setSelectedTime(e.target.value)}>
                    {times.map(time => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="screen">Screen</div>

            <div className="seats-grid">
                {[...Array(rows)].map((_, row) => (
                    <div key={row} className="seat-row">
                        {[...Array(cols)].map((_, col) => {
                            const seatId = `${row}-${col}`;
                            const isReserved = reservedSeats.some(([r, c]) => r === row && c === col);
                            const isSelected = selectedSeats.includes(seatId);

                            let seatClass = 'seat';
                            if (isReserved) seatClass += ' reserved';
                            else if (isSelected) seatClass += ' selected';

                            return (
                                <div
                                    key={col}
                                    className={seatClass}
                                    onClick={() => toggleSeat(row, col)}
                                ></div>
                            );
                        })}
                    </div>
                ))}
            </div>

            <div className="legend">
                <span><span className="dot selected"></span> Selected</span>
                <span><span className="dot reserved"></span> Reserved</span>
                <span><span className="dot available"></span> Available</span>
            </div>

            <button
                className="checkout-btn"
                onClick={() => {
                    handleCheckout();
                }}
            >
                <Link to="/checkout">
                    Checkout ({selectedSeats.length} sæder – ${totalPrice})
                </Link>
            </button>
        </div>
    );
}

export default SelectSeats;


