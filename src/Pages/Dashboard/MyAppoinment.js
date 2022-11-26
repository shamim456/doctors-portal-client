import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/booking?paitent=${user.email}`)
        .then((res) => res.json())
        .then((data) => setAppoinments(data));
    }
  }, [user]);
  console.log(appoinments);

  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Treatment</th>
          </tr>
        </thead>
        <tbody>
          {appoinments.map((appoinment, index) => (
            <tr>
              <th>{index + 1}</th>
              <td>{appoinment.patientName}</td>
              <td>{appoinment.date}</td>
              <td>{appoinment.slot}</td>
              <td>{appoinment.treatment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyAppoinment;
