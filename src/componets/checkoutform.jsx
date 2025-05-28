import React, { useState, useEffect, useRef } from 'react';
import PopUp from '../componets/popup.jsx';

function CheckoutForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [cardNumber, setCardNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [activeCard, setActiveCard] = useState(0);
    const cardContainerRef = useRef(null);

    useEffect(() => {
        const storedPrice = localStorage.getItem("totalPrice");
        if (storedPrice) {
            setPrice(parseFloat(storedPrice));
        }
    }, []);

    const handleScroll = () => {
        const scrollLeft = cardContainerRef.current.scrollLeft;
        const cardWidth = cardContainerRef.current.offsetWidth;
        const index = Math.round(scrollLeft / cardWidth);
        setActiveCard(index);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !cardNumber || !date || !cvv) {
            alert("Please fill out all fields.");
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^\d{16}$/.test(cardNumber)) {
            alert("Card number must be exactly 16 digits.");
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            alert("CVV must be exactly 3 digits.");
            return;
        }

        const booked = JSON.parse(localStorage.getItem('bookers')) || [];
        booked.push({ email, name, cardNumber, date, cvv });
        localStorage.setItem('sponsors', JSON.stringify(booked));
        localStorage.removeItem("totalPrice");

        setShowPopup(true);

        setName('');
        setCardNumber('');
        setEmail('');
        setDate('');
        setCvv('');
    };

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>


            <div
                className="card-scroll-container"
                onScroll={handleScroll}
                ref={cardContainerRef}
            >
                {[0, 1, 2].map((index) => (
                    <div key={index} className={`card ${activeCard === index ? 'active' : ''}`}>
                        <div className="logo">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mc" />
                        </div>
                        <div className="balance">$120,580.00</div>
                        <div className="card-holder">{name}</div>
                        <div className="card-number">**** **** **** 51446</div>
                        <div className="card-number">{cvv}</div>
                    </div>
                ))}
            </div>

            <form className="payment-details" onSubmit={handleSubmit}>
                <label>Your Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Cardholder Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Card Number</label>
                <input
                    type="text"
                    name="cardNumber"
                    placeholder="**** **** **** 51446"
                    value={cardNumber}
                    maxLength="16"
                    onChange={(e) => setCardNumber(e.target.value)}
                />

                <div className="row">
                    <div className="col">
                        <label>Date</label>
                        <input
                            type="date"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div className="col">
                        <label>CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            placeholder="123"
                            maxLength="3"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value)}
                        />
                    </div>
                </div>

                <button  className="pay-btn">
                    Pay Now <span>${price.toFixed(2)}</span>
                </button>
            </form>

            <PopUp show={showPopup} />
        </div>
    );
}

export default CheckoutForm;



