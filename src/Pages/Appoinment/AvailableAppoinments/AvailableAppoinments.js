import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading";
import BookingModal from "../BookingModal";
import AvailableAppoinmentCard from "./AvailableAppoinmentCard";

const AvailableAppoinments = ({ date }) => {
  // const [services, setServices] = useState([]); use react   query
  const [treatment, setTreatment] = useState({});
  const formatedDate = format(date, "PP");

  const { isLoading, error, data: services, refetch} = useQuery(["available", formatedDate], () =>
  fetch(`http://localhost:5000/available?date=${formatedDate}`).then(res =>
    res.json()
  ))


  console.log(services);
  if (isLoading) {
    return <Loading></Loading>;
  }

  //use react query
  // useEffect(() => {
  //   fetch(`http://localhost:5000/available?date=${formatedDate}`)
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // }, [formatedDate]);
  // console.log(treatment)
  return (
    <div>
      <p>Available Services on {format(date, "PP")}.</p>
      <p>Please select a service.</p>
      <div className="grid grid-cols-3 gap-5">
        {services?.map((service) => (
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
          refetch ={refetch}
          treatment={treatment}
          date={date}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppoinments;
