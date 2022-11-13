import React from "react";
import background from "../../assets/images/appointment.png";

const Contact = () => {
  return (
    <section
      className="w-full mt-40 flex flex-col items-center justify-center "
      style={{ background: `url(${background})`, backgroundSize: "cover" }}
    >
      <div className="mx-auto text-center mt-6">
        <h3 className="text-primary font-bold text-xl mb-5 ">Contact Us</h3>
        <h1 className="font-bold text-4xl text-white mb-5">
          Stay connected with us
        </h1>
      </div>
      <div className="flex flex-col w-1/3">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full mb-5 "
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="input input-bordered w-full mb-5 "
          required
        />
        <textarea className="textarea " placeholder="Your Message"></textarea>
        <button className="btn btn-primary mt-6 mb-7 w-1/3 mx-auto">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Contact;
//style={{background: `url(${background})`
