import React from "react";
import CavityTeeth from "../../../assets/images/cavity.png";
import WhiteTeeth from "../../../assets/images/whitening.png";
import FluorideTeeth from "../../../assets/images/fluoride.png";
import Service from "./Service";
import TreatmentImg from "../../../assets/images/treatment.png";

const ServiceCardInfo = [
  {
    id: 1,
    title: "Fluoride Treatment",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, odio.",
    icon: `${FluorideTeeth}`,
  },
  {
    id: 2,
    title: "Cavity Filling",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, odio.",
    icon: `${CavityTeeth}`,
  },
  {
    id: 3,
    title: "Teeth Whitening",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, odio.",
    icon: `${WhiteTeeth}`,
  },
];

const Services = () => {
  return (
    <div className="mt-32">
      <div className="text-center">
        <h4 className="font-bold text-xl text-primary">OUR SERVICES</h4>
        <h2 className="font-bold text-3xl">Services We Provide</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-black mx-auto mt-16">
        {ServiceCardInfo.map((service) => (
          <Service
            key={service.id}
            title={service.title}
            content={service.content}
            icon={service.icon}
          ></Service>
        ))}
      </div>
      <div className="hero min-h-screen mx-auto mt-44">
        <div className="hero-content flex-col lg:flex-row">
          <img src={TreatmentImg} className="max-w-sm rounded-lg shadow-2xl" alt="dental pic" />
          <div className="ml-16">
            <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p className="py-6 text-justify">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
