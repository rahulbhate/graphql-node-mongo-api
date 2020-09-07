import React from 'react';
const EventForm = () =>(
    <>
    <form className="form1" action>
        <p>Add Event / Booking</p>
        <label htmlFor="event_title" className="first-name">Title</label>
        <input id="event_title" type="text" required/>
        <label htmlFor="event_price" className="last-name">Price</label>
        <input id="event_price" type="text" required/>
        <label htmlFor="event_date">Date</label>
        <input id="event_date" type="date" required/>
        <label htmlFor="event_description">Description</label>
        <input id="event_description" type="text" required/>
        <button>Add Event / Add Booking</button>
      </form>
    </>
)
export default EventForm;