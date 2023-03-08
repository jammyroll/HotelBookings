import React from 'react'
import {deleteBooking} from './BookingService';

const BookingItem = ({booking, removeBooking}) => {

    const handleDelete = () => {
        deleteBooking(booking._id).then(() => {
            removeBooking(booking._id)
        })
    }

    return (
    <div>
        <h1>Name: {booking.name}</h1>
        <p>Email: {booking.email}</p>
        <p>Checked in:{booking.status}</p>
        <button onClick={handleDelete}>Del</button>
        <hr/>
    </div>
    )
    }   

export default BookingItem