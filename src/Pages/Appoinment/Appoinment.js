import React, { useState } from "react";
import AppoinmentBanner from "./AppoinmentBanner/AppoinmentBanner";
import AvailableAppoinments from "./AvailableAppoinments/AvailableAppoinments";

const Appoinment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner date={date} setDate={setDate}></AppoinmentBanner>
      <AvailableAppoinments date={date}></AvailableAppoinments>
    </div>
  );
};

export default Appoinment;
