import React from "react";
import { format } from "date-fns";
const BookingModal = ({ treatment, date }) => {
  const { name, slots } = treatment;
console.log(treatment)

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.timeSlot.value;
    console.log(slot)
  }

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Booking For : {name}</h3>
          <form onSubmit={handleBooking} className="grid grid-cols-1 gap-5 justify-items-center">
            <input
              name="date"
              type="text"
              value={format(date, "PP")}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="timeSlot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option  value={slot}>{slot}</option>
              ))}
            </select>
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="email"
              type="text"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input type="submit" value="SUBMIT" className="btn btn-primary " />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
