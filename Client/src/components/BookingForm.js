import React, {useState} from 'react'
import { postBooking } from './BookingService'

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: ""
    });
    const CheckIn={
        YES : "Yes",
        NO : "No"
    }
    const onChange = (event) => {
        const newFormData = Object.assign({}, formData);
        newFormData[event.target.name] = event.target.value;
        setFormData(newFormData);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        postBooking(formData).then((data) => {
            addBooking(data);
        })
        setFormData({ 
        name: "",
        email: "",
        status: ""
    });
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Add Booking:</h2>
            <div>
                <label htmlFor='name'>Name:</label>
                <input 
                    onChange={onChange}
                    type="text"
                    id='name'
                    name='name'
                    value={formData.name}
                    required/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input
                onChange={onChange}
                type='text'
                id='email'
                name='email'
                value={formData.email}
                required/>  
            </div>
            <div>
                <label htmlFor='status'>Checked in:</label>
                <select
                onChange={onChange}
                id='status'
                name='status'
                value={formData.status}>
                    <option value='' disabled>Choose...</option>
                    <option value={CheckIn.YES}>Yes</option>
                    <option value={CheckIn.NO}>No</option>
                </select>
            </div>
            <input type='submit' value='Save' id='save'/>
        </form>
    )
}

export default BookingForm;