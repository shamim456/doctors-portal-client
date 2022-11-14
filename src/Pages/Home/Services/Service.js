import React from "react";

const Service = ({icon, content, title}) => {
  return (
    <div
      className='bg-base-100 shadow-xl bg-white pl-2.5  text-center'
    >
      <figure>
        <img src={icon} alt="Album" className="mx-auto w-20" />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Service;
