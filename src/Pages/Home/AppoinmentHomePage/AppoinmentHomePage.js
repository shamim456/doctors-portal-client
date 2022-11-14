import React from "react";
import Doctor from "../../../assets/images/doctor.png";
import background from '../../../assets/images/appointment.png'

const AppoinmentHomePage = () => {
  return (
    <section className="flex justify-center items-center" style={{background: `url(${background})`, height: '533px', marginTop:'272px'}}>
      <div className="flex-1">
        <img src={Doctor} alt="doctor" style={{height: '730px', marginTop: '-200px'}} />
      </div>
      <div className="flex-1">
        <h1 className="text-primary font-bold text-xl">Appointment</h1>
        <h1 className="text-4xl text-white mt-6">Make an appointment Today</h1>
        <p className="text-white mt-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <button className="btn btn-primary mt-6">Get Started</button>
      </div>
    </section>
  );
};

export default AppoinmentHomePage;
