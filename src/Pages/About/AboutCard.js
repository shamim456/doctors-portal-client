import React from "react";

const AboutCard = ({ title, icon, content}) => {
    console.log(icon)
  return (
    <div className={`card lg:card-side bg-base-100 shadow-xl bg-primary pl-2.5`}>
        <figure><img src={icon} alt="Album"/></figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutCard;
