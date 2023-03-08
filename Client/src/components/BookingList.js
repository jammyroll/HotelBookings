import React from 'react';
import BookingItem from './BookingItem';

const BookingList = ({bookings, removeBooking}) => {

    const bookingsList = bookings.map((booking) => {
        return <BookingItem booking={booking} key={booking._id} removeBooking={removeBooking}/>
    })

    return (
    <>
    {bookingsList}
    </>
    )
};

export default BookingList;