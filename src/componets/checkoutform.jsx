import React, { useState, useEffect } from 'react';

function CheckoutForm() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [cardNumber, setCardNumber] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!name || !email || !cardNumber || !date || !cvv) {
            alert("Please fill out all fields.");
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Card number validation (16 digits)
        const cardNumberPattern = /^\d{16}$/;
        if (!cardNumberPattern.test(cardNumber)) {
            alert("Card number must be exactly 16 digits.");
            return;
        }

        // CVV validation (3 digits)
        if (!/^\d{3}$/.test(cvv)) {
            alert("CVV must be exactly 3 digits.");
            return;
        }

        const booked = JSON.parse(localStorage.getItem('bookers')) || [];
       booked.push({ email, name, cardNumber, date, cvv });
        localStorage.setItem('sponsors', JSON.stringify(booked));

        // Clear fields after submission
        setName('');
        setCardNumber('');
        setEmail('');
        setDate('');
        setCvv('');

        // Show thank you message
        alert("Thank you for booking!");
    };

    useEffect(() => {
        const storedPrice = localStorage.getItem("totalPrice");
        if (storedPrice) {
            setPrice(parseFloat(storedPrice));
        }
    }, []);

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="payment-method">
                <div className="card">
                    <div className="logo">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="mc" />
                    </div>
                    <div className="balance">$120,580.00</div>
                    <div className="card-holder">Jackie</div>
                    <div className="card-number">**** **** **** 51446</div>
                </div>
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
                    maxLength="16" // Set max length to 16
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

                <button type="submit" className="pay-btn">
                    Pay Now <span>${price.toFixed(2)}</span>
                </button>
            </form>
        </div>
    );
}

export default CheckoutForm;



