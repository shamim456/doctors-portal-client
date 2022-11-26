import React from "react";
import { format, formatedDate } from "date-fns";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

import { toast } from "react-toastify";
// import id from "date-fns/esm/locale/id/index.js";
const BookingModal = ({ setTreatment, treatment, date, refetch }) => {
  const { _id, name, slots } = treatment;
  // console.log(slots);
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  const formatedData = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.timeSlot.value;
    console.log(slot);
    const bookingData = {
      id: _id,
      treatment: name,
      date: formatedData,
      slot,
      patientName: user.displayName,
      patientEmail: user.email,
      phoneNumber: e.target.phoneNumber.value,
    };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.success);
        if (data.success) {
          toast("Your Appoinment Set Successfully");
        } else {
          toast.error("You Already Have An Appoinment");
        }
        // setTreatment({});
        refetch();
      });
  };

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
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-5 justify-items-center"
          >
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
              {!slots
                ? "No Slot Available At This Time"
                : slots.map((slot) => (
                    <option key={Math.random()} value={slot}>
                      {slot}
                    </option>
                  ))}
            </select>
            <input
              disabled
              name="name"
              type="text"
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              disabled
              name="email"
              type="text"
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />

            <button type="submit">
              <label
                htmlFor="booking-modal"
                className="btn btn-primary" 
              >
                SUBMIT
              </label>
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
