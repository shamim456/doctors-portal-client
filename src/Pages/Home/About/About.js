import React from "react";
import AboutCard from "./AboutCard";
import Clock from "../../../assets/icons/clock.svg";
import Marker from "../../../assets/icons/marker.svg";
import Phone from "../../../assets/icons/phone.svg";

const aboutCardInfo = [
  { 
    id: 1,
    title: "Opening Hours",
    content: "Lorem Ipsum is simply dummy text of the pri",
    icon: `${ Clock }`,
  },
  {
    id: 2,
    title: "Visit our location",
    content: "Brooklyn, NY 10036, United States",
    icon: `${Marker}`,
  },
  {
    id: 3,
    title: "Contact us now",
    content: "+880 1888474995",
    icon: `${ Phone }`,
  },
];


const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-white mx-auto">
      {aboutCardInfo.map((info) => (
        <AboutCard key={info.id} title={info.title} icon={info.icon} content={info.content} ></AboutCard>
      ))}
    </div>
  );
};

export default About;
