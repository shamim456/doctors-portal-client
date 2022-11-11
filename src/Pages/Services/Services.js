import React from "react";
import CavityTeeth from "../../assets/images/cavity.png";
import WhiteTeeth from "../../assets/images/whitening.png";
import FluorideTeeth from "../../assets/images/fluoride.png";
import Service from "./Service";

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
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-black w-4/5 mx-auto">
      {ServiceCardInfo.map((service) => (
        <Service
          key={service.id}
          title={service.title}
          content={service.content}
          icon={service.icon}
        ></Service>
      ))}
    </div>
  );
};

export default Services;
