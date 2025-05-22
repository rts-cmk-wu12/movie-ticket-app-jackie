import React, { useState, useEffect } from 'react';

function CheckoutForm() {
    const [price, setPrice] = useState(0);
    const [form, setForm] = useState({
        email: '',
        name: '',
        cardNumber: '',
        date: '02 Nov 2021',
        cvv: '',
    });

    useEffect(() => {

        const storedPrice = localStorage.getItem("totalPrice");
        if (storedPrice) {
            setPrice(parseFloat(storedPrice));
        }
    }, []);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (Object.values(form).some(v => !v)) {
            alert("Udfyld alle felter.");
            return;
        }
        alert("Betaling gennemført!");
    };

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
                <input type="email" name="email" placeholder="email" value={form.email} onChange={handleChange} />

                <label>Cardholder Name</label>
                <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} />

                <label>Card Number</label>
                <input type="text" name="cardNumber" placeholder="**** **** **** 51446" value={form.cardNumber} onChange={handleChange} />

                <div className="row">
                    <div className="col">
                        <label>Date</label>
                        <select name="date" value={form.date} onChange={handleChange}>
                            <option>02 Nov 2021</option>
                            <option>03 Nov 2021</option>
                            <option>04 Nov 2021</option>
                        </select>
                    </div>
                    <div className="col">
                        <label>CVV</label>
                        <input type="text" name="cvv" placeholder="123" maxLength="4" value={form.cvv} onChange={handleChange} />
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
