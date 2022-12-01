import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const MyAppoinment = () => {
  const [appoinments, setAppoinments] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      console.log(user);
      fetch(`http://localhost:5000/booking?patientEmail=${user.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then((res) => {
          if(res.status === 401 || res.status === 403) {
            localStorage.removeItem('accessToken');
            navigate('/');
            signOut(auth);
          }
          return res.json()
        })
        .then((data) => {
          console.log(data);
          setAppoinments(data);
        });
    }
  }, [user, navigate]);
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
