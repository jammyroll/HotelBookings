import React, {useState} from 'react'
import { postBooking } from './BookingService'

const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        status: ""
    });

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
                    value={formData.name}/>
            </div>
            <div>
                <label htmlFor='email'>Email:</label>
                <input
                onChange={onChange}
                type='text'
                id='email'
                name='email'
                value={formData.email}/>  
            </div>
            <div>
                <label htmlFor='status'>Checked in:</label>
                <select
                onChange={onChange}
                type=''
                id='status'
                name='status'
                value={formData.status}>
                    <option value='' disabled>Choose...</option>
                    <option value={formData.status}>Yes</option>
                    <option value={formData.status}>No</option>
                </select>
            </div>
            <input type='submit' value='Save' id='save'/>
        </form>
    )
}

export default BookingForm;