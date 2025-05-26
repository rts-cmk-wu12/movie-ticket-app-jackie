const bookingInfo = JSON.parse(localStorage.getItem("bookingInfo"));
const selectedCinema = bookingInfo.cinema;
const selectedDate = bookingInfo.date;
const selectedTime = bookingInfo.time;
const selectedSeats = bookingInfo.seats;
const totalPrice = bookingInfo.totalPrice;
