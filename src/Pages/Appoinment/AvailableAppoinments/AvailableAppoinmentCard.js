import React from "react";

const AvailableAppoinmentCard = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          {slots.length} {slots.length <= 1 ? "Space" : "Spaces"} Available
        </p>
        <p>
          {slots.length !== 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">
              <small>No Slot Available</small>
            </span>
          )}
        </p>
        <div className="card-actions justify-center">
          <button></button>
          <label
            disabled={slots.length === 0}
            className="btn btn-primary"
            onClick={() => setTreatment(service)}
            htmlFor="booking-modal"
          >
            Book Appoinment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AvailableAppoinmentCard;
