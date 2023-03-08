import React, {useState, useEffect} from 'react'

// import bookingform
// import bookinglist
// import{getbookings}


const BookingContainer = () => {

    const[bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings().then((allBookings) => {
            setBookings(allBookings)
        })
    }, []);

    const addBooking = (booking) => {
        setBookings([...bookings, booking])
    };

    const removeBooking = (id) => {
        const bookingsToKeep = bookings.filter(booking => booking._id !== id)
        setBookings(bookingsToKeep)
    };

    return (
    <div>
        <BookingForm addBooking={addBooking}/>
        <BookingList bookings={bookings} removeBooking={removeBooking}/>
    </div>
    )
}

export default BookingContainer;