import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "../BookingModal";
import AvailableAppoinmentCard from "./AvailableAppoinmentCard";

const AvailableAppoinments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  // console.log(treatment)
  return (
    <div>
      <p>Available Services on {format(date, "PP")}.</p>
      <p>Please select a service.</p>
      <div className="grid grid-cols-3 gap-5">
        {services.map((service) => (
          <AvailableAppoinmentCard
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></AvailableAppoinmentCard>
        ))}
      </div>
      {setTreatment && (
        <BookingModal
          setTreatment={setTreatment}
          treatment={treatment}
          date={date}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
